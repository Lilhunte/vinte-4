// Use only anon key; never service role.
const SUPABASE_URL = "https://arsykpzxrhaofxeqzelp.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyc3lrcHp4cmhhb2Z4ZXF6ZWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NjkzODMsImV4cCI6MjA3MTQ0NTM4M30.pVfFky0EauCMeAXH7uIZ6ypF3pds3D-lkhHqw1Bn-HE";

function escapeHtml(s) {
    if (!s) return '';
    return s.replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

async function sbFetch(query) {
    if (SUPABASE_ANON === 'YOUR_ANON_KEY_HERE') {
        console.warn("Supabase ANON key is missing. Reviews will not be loaded.");
        return []; // Return empty array so the UI can show a message.
    }
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${query}`, {
        headers: {
            "apikey": SUPABASE_ANON,
            "Authorization": `Bearer ${SUPABASE_ANON}`,
            "Cache-Control": "no-cache", // Use header to prevent caching
        }
    });
    if (!res.ok) {
        throw new Error(await res.text());
    }
    return res.json();
}

async function sbInsert(row) {
    if (SUPABASE_ANON === 'YOUR_ANON_KEY_HERE') {
        console.warn("Supabase ANON key is missing. Cannot submit review.");
        throw new Error("Configuration incomplete. Please provide the Supabase anon key.");
    }
    const res = await fetch(`${SUPABASE_URL}/rest/v1/reviews`, {
        method: "POST",
        headers: {
            "apikey": SUPABASE_ANON,
            "Authorization": `Bearer ${SUPABASE_ANON}`,
            "Content-Type": "application/json",
            "Prefer": "return=representation"
        },
        body: JSON.stringify(row)
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
}

async function renderReviews() {
    const list = document.getElementById("reviews-list");
    const avgEl = document.getElementById("reviews-avg");
    if (!list) return;

    list.innerHTML = `<div class="text-sm text-neutral-600">A carregar avaliações...</div>`;

    try {
        const rows = await sbFetch('reviews?select=*&order=created_at.desc&limit=50');

        list.innerHTML = ""; // Clear loading message

        if (rows.length > 0) {
            if (avgEl) {
                const mean = (rows.reduce((a, r) => a + Number(r.rating || 0), 0) / rows.length).toFixed(1);
                avgEl.textContent = `${mean} ★ (${rows.length} avaliações)`;
            }

            const isPreview = !!avgEl; // If the average element exists, we're on the homepage (preview)
            const reviewsToShow = isPreview ? rows.slice(0, 3) : rows;

            reviewsToShow.forEach(r => {
                const card = document.createElement("div");
                card.className = "p-6 rounded-2xl border bg-white shadow-soft micro-hover";
                card.innerHTML = `
                  <div class="flex items-center justify-between">
                    <strong>${escapeHtml(r.name)}</strong>
                    <span class="text-gold">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span>
                  </div>
                  <p class="mt-2 text-sm text-neutral-700">${escapeHtml(r.comment)}</p>
                  <div class="text-xs text-neutral-500 mt-2">${new Date(r.created_at).toLocaleDateString('pt-PT')}</div>`;
                list.appendChild(card);
            });
        } else {
            if (SUPABASE_ANON === 'YOUR_ANON_KEY_HERE') {
                list.innerHTML = `<div class="p-4 rounded-2xl border bg-yellow-50 text-yellow-800">A funcionalidade de avaliações está desativada.</div>`;
            } else {
                list.innerHTML = `<div class="text-sm text-neutral-600">Seja o primeiro a deixar uma avaliação.</div>`;
            }
        }
    } catch (e) {
        console.error("Error fetching reviews:", e);
        list.innerHTML = `<div class="p-4 rounded-2xl border bg-red-50 text-red-700">Não foi possível carregar as avaliações.</div>`;
    }
}

async function handleReviewSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');

    const name = document.getElementById("rev-name").value.trim();
    const rating = parseInt(document.getElementById("rev-rating").value, 10);
    const comment = document.getElementById("rev-comment").value.trim();

    if (!name || !comment || !(rating >= 1 && rating <= 5)) {
        alert("Por favor, preencha o seu nome, um comentário e uma classificação de 1 a 5 estrelas.");
        return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "A Enviar...";

    try {
        const insertedRow = await sbInsert({ name, rating, comment, locale: (localStorage.getItem("v24_lang") || "pt") });
        console.log("Supabase INSERT response:", JSON.stringify(insertedRow));
        form.reset();
        alert("Obrigado! A sua avaliação foi submetida com sucesso.");
        await renderReviews(); // Await the re-render to ensure the UI is updated
    } catch (e) {
        console.error("Error submitting review:", e);
        alert(`Ocorreu um erro ao enviar a sua avaliação: ${e.message}`);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Publicar Avaliação";
    }
}

function initReviews() {
    const form = document.getElementById("reviews-form");
    if (form) {
        form.addEventListener("submit", handleReviewSubmit);
    }
    if (document.getElementById("reviews-list")) {
        renderReviews();
    }
}

document.addEventListener("DOMContentLoaded", initReviews);
