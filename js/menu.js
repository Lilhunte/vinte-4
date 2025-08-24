import { MENU_PT } from './data.menu.pt.js';
import { MENU_EN } from './data.menu.en.js';
import { MENU_ES } from './data.menu.es.js';
import { MENU_FR } from './data.menu.fr.js';
import { $, $$ } from './utils.dom.js';

const MENUS = { pt: MENU_PT, en: MENU_EN, es: MENU_ES, fr: MENU_FR };

const UI_TEXT = {
    pt: { viewAll: "Ver Todos", allergens: "Alérgenos" },
    en: { viewAll: "View All", allergens: "Allergens" },
    es: { viewAll: "Ver Todos", allergens: "Alérgenos" },
    fr: { viewAll: "Voir Tout", allergens: "Allergènes" },
};

let currentLang = 'pt';
let currentCategory = 'all';

function getLang() {
    try {
        const savedLang = localStorage.getItem('v24_lang');
        return savedLang && MENUS[savedLang] ? savedLang : 'pt';
    } catch (e) {
        console.error("Could not read language from localStorage", e);
        return 'pt';
    }
}

function setLang(lang) {
    if (MENUS[lang]) {
        currentLang = lang;
        try {
            localStorage.setItem('v24_lang', lang);
        } catch (e) {
            console.error("Could not save language to localStorage", e);
        }
        render();
    }
}

function setCategory(category) {
    currentCategory = category;
    render();
}

function render() {
    const menuData = MENUS[currentLang];
    const uiText = UI_TEXT[currentLang];
    const menuContainer = $('#menu-container');
    const controlsContainer = $('#menu-controls');
    if (!menuContainer || !controlsContainer) return;

    // Render category filters
    const categoryFilters = $('#category-filters', controlsContainer);
    let categoryHtml = `<button data-cat="all" class="${currentCategory === 'all' ? 'bg-charcoal text-white' : 'bg-white'} px-4 py-2 rounded-lg text-sm font-semibold border">${uiText.viewAll}</button>`;
    menuData.categories.forEach(cat => {
        categoryHtml += `<button data-cat="${cat.id}" class="${currentCategory === cat.id ? 'bg-charcoal text-white' : 'bg-white'} px-4 py-2 rounded-lg text-sm font-semibold border">${cat.name}</button>`;
    });
    categoryFilters.innerHTML = categoryHtml;

    // Render menu items
    let menuHtml = '';
    menuData.categories.forEach(cat => {
        const items = menuData.items.filter(item => item.cat === cat.id);
        if (items.length > 0 && (currentCategory === 'all' || currentCategory === cat.id)) {
            menuHtml += `<div id="cat-${cat.id}" class="mb-12">`;
            menuHtml += `<h2 class="text-3xl font-serif mb-6 border-b-2 border-gold pb-2">${cat.name}</h2>`;
            menuHtml += `<div class="grid md:grid-cols-2 gap-x-8 gap-y-6">`;
            items.forEach(item => {
                menuHtml += `
                    <div>
                        <div class="flex justify-between items-start">
                            <h3 class="text-xl font-semibold pr-4">${item.name}</h3>
                            <p class="text-xl font-semibold text-oxblood whitespace-nowrap">${item.price}</p>
                        </div>
                        <p class="text-neutral-600 text-sm mt-1">${item.desc}</p>
                        ${item.allergens.length ? `<p class="text-xs text-neutral-500 mt-1">${uiText.allergens}: ${item.allergens.join(', ')}</p>` : ''}
                    </div>
                `;
            });
            menuHtml += `</div></div>`;
        }
    });
    menuContainer.innerHTML = menuHtml;

    // Update active language button
    $$('#language-switcher button').forEach(btn => {
        const btnLang = btn.dataset.lang;
        if (btnLang === currentLang) {
            btn.classList.add('bg-oxblood', 'text-white');
            btn.classList.remove('border', 'hover:bg-oxblood/80', 'hover:text-white');
        } else {
            btn.classList.remove('bg-oxblood', 'text-white');
            btn.classList.add('border', 'hover:bg-oxblood/80', 'hover:text-white');
        }
    });

    // Add event listeners to new buttons
    $$('#category-filters button').forEach(btn => {
        btn.addEventListener('click', () => setCategory(btn.dataset.cat));
    });
}

function initMenu() {
    // Only run on menu page
    if (!$('#menu-container')) return;

    currentLang = getLang();
    render();

    // Attach language switcher listeners
    $$('#language-switcher button').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
}

document.addEventListener("DOMContentLoaded", initMenu);
