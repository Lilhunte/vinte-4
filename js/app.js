import { $, $$ } from "./utils.dom.js";
import { nowLisbon } from "./utils.time.js";
import { HOURS } from "./data.hours.js";
import { PLATE_OF_DAY } from "./data.plateOfDay.js";

// --- OPEN/CLOSED BADGE LOGIC ---

const within = (now, [o, c]) => {
    const d = now.format("YYYY-MM-DD");
    const open = dayjs.tz(`${d} ${o}`, "YYYY-MM-DD HH:mm", "Europe/Lisbon");
    const close = dayjs.tz(`${d} ${c}`, "YYYY-MM-DD HH:mm", "Europe/Lisbon");
    return now.isAfter(open) && now.isBefore(close);
};

const getNextOpening = (now) => {
    for (let i = 0; i < 7; i++) {
        const d = now.add(i, 'day');
        const wd = parseInt(d.format('d')) + 1;
        const dayHours = HOURS[wd];
        if (!dayHours) continue;

        const dateStr = d.format("YYYY-MM-DD");

        if (dayHours.lunch?.length) {
            const openTime = dayjs.tz(`${dateStr} ${dayHours.lunch[0]}`, "YYYY-MM-DD HH:mm", "Europe/Lisbon");
            if (now.isBefore(openTime)) {
                return { date: d, time: dayHours.lunch[0] };
            }
        }
        if (dayHours.dinner?.length) {
            const openTime = dayjs.tz(`${dateStr} ${dayHours.dinner[0]}`, "YYYY-MM-DD HH:mm", "Europe/Lisbon");
            if (now.isBefore(openTime)) {
                return { date: d, time: dayHours.dinner[0] };
            }
        }
    }
    return null;
};

function renderOpenBadge() {
    const el = $("#open-badge");
    if (!el) return;

    const now = nowLisbon();
    const wd = parseInt(now.format('d')) + 1;
    const lunch = HOURS[wd]?.lunch || [];
    const dinner = HOURS[wd]?.dinner || [];
    const isOpen = (lunch.length && within(now, lunch)) || (dinner.length && within(now, dinner));

    if (isOpen) {
        el.textContent = "Aberto agora";
        el.className = "px-3 py-1 rounded-full bg-green-600 text-white text-xs shadow-soft font-semibold";
    } else {
        const n = getNextOpening(now);
        let text = "Fechado";
        if (n) {
            const dayFormat = n.date.isSame(now, 'day') ? 'hoje' : n.date.format("ddd");
            text = `Fechado · Abre ${dayFormat} às ${n.time}`;
        }
        el.textContent = text;
        el.className = "px-3 py-1 rounded-full bg-oxblood text-white text-xs shadow-soft font-semibold";
    }
}

// --- PLATE OF THE DAY ---

function renderPlateOfDay() {
    const section = $("#plate-of-day-section");
    if (!section) return;

    const now = nowLisbon();
    const wd = parseInt(now.format('d')) + 1;
    const plate = PLATE_OF_DAY[wd];

    if (!plate || !plate.price) {
        section.innerHTML = `
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-4xl font-serif mb-4">Prato do Dia</h2>
                <p class="text-lg text-neutral-600">${plate ? plate.desc : "Consulte o nosso menu para outras opções."}</p>
            </div>`;
        return;
    }

    section.innerHTML = `
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-serif text-center mb-12">Prato do Dia</h2>
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="order-2 md:order-1">
                    <h3 class="text-3xl font-serif text-oxblood mb-2">${plate.title}</h3>
                    <p class="text-neutral-600 mb-4">${plate.desc}</p>
                    <p class="text-2xl font-semibold text-charcoal mb-6">${plate.price}</p>
                    <a href="menu.html" class="px-6 py-3 border border-charcoal text-charcoal rounded-lg font-semibold hover:bg-charcoal hover:text-white transition-colors">Ver Menu Completo</a>
                </div>
                <div class="order-1 md:order-2">
                    <img src="${plate.img}" alt="${plate.title}" class="w-full h-auto max-h-[400px] rounded-2xl shadow-soft object-cover">
                </div>
            </div>
        </div>`;
}

// --- HOURS TABLE ---

function renderHoursTable() {
    const container = $("#hours-table");
    if (!container) return;

    const days = { 3: "Terça-feira", 4: "Quarta-feira", 5: "Quinta-feira", 6: "Sexta-feira", 7: "Sábado", 1: "Domingo", 2: "Segunda-feira" };
    const displayOrder = [2, 3, 4, 5, 6, 7, 1]; // Mon -> Sun

    let html = '<dl class="space-y-2">';
    for (const dayKey of displayOrder) {
        const dayName = days[dayKey];
        const hours = HOURS[dayKey];
        let hoursText;
        if (!hours.lunch.length && !hours.dinner.length) {
            hoursText = "<span class='text-neutral-500'>Fechado</span>";
        } else {
            const parts = [];
            if (hours.lunch.length) parts.push(`<strong>Almoço:</strong> ${hours.lunch[0]} - ${hours.lunch[1]}`);
            if (hours.dinner.length) parts.push(`<strong>Jantar:</strong> ${hours.dinner[0]} - ${hours.dinner[1]}`);
            hoursText = parts.join(' / ');
        }
        html += `<div class="flex justify-between items-baseline"><dt>${dayName}</dt><dd class="text-right text-sm">${hoursText}</dd></div>`;
    }
    html += '</dl>';
    container.innerHTML = html;
}

// --- ANIMATIONS ---

function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('fade-up');
            observer.observe(section);
        });
    }
}


// --- INITIALIZATION ---
function init() {
    renderOpenBadge();
    renderPlateOfDay();
    renderHoursTable();
    initScrollAnimations();
    setInterval(renderOpenBadge, 60000); // Update badge every minute
}

document.addEventListener("DOMContentLoaded", init);
