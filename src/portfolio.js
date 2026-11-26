import './style.css';
import { updateLanguage } from './main.js';

import carImg from './assets/photos/works/Car.jpg';
import ceramicSoulImg from './assets/photos/works/CeramicSoul.jpg';
import flappyBirdImg from './assets/photos/works/FlappyBirdGame.jpg';
import weatherWidgetImg from './assets/photos/works/WeatherWidget.jpg';
import monStuImg from './assets/photos/works/MonovisionStudio.png';
import aliImg from './assets/photos/works/Ali.jpg';

const projects = [
    {
        id: 1,
        title: "ABC Auto Landing Page",
        shortDescription: "A sleek, responsive car dealership landing page built with Tailwind CSS",
        description: "A modern, responsive landing page for an official car dealership. The UI features dynamic promo banners, brand-filtered catalog listings, customer review sections, and interactive elements like a car loan calculator. Built with HTML, CSS, and Tailwind CSS, focusing on clean layout structure, crisp visual hierarchy, and cross-device responsiveness.",
        year: "13 June 2025",
        date: "2025-06-13",
        technologies: ["HTML", "CSS", "Tailwind CSS"],
        image: carImg,
        github: "https://github.com/Annet2804/SiteCar.git",
        live: "https://annet2804.github.io/SiteCar/"
    },
    {
        id: 2,
        title: "Ceramic Soul Landing Page",
        shortDescription: "An elegant, responsive website for a handmade ceramics studio & workshop built with SCSS",
        description: "A minimal and aesthetic landing page designed for a handmade ceramics brand and workshop. The UI features showcase sections for handcrafted pottery, masterclass information, an interactive contact form, and a responsive image slider highlighting recent works. Built with modern HTML, modular SCSS, and Vite, leveraging Swiper for smooth gallery sliders and Just-Validate for seamless form validation.",
        year: "23 October 2025",
        date: "2025-10-23",
        technologies: ["HTML", "SCSS", "Vite"],
        image: ceramicSoulImg,
        github: "https://github.com/Annet2804/Ceramic-Soul-Project.git",
        live: "https://annet2804.github.io/Ceramic-Soul-Project/"
    },
    {
        id: 3,
        title: "Flappy Bird Game",
        shortDescription: "An interactive Flappy Bird arcade game built with HTML, CSS, and JavaScript",
        description: "A fun and engaging Flappy Bird browser game featuring real-time score tracking, collision detection, and custom skins (bird and obstacle models). Includes state management for game over screens, custom control buttons, and options to restart or swap skins seamlessly.",
        year: "01 January 2026",
        date: "2026-01-19",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: flappyBirdImg,
        github: "https://github.com/Annet2804/Flappy_bird_game.git",
        live: "https://annet2804.github.io/Flappy_bird_game/"
    },
    {
        id: 4,
        title: "Weather Widget App",
        shortDescription: "A dynamic glassmorphic weather widget integrating OpenWeatherMap API ",
        description: "A sleek browser weather application featuring real-time city search, dynamic weather icons, current time with timezone awareness, and detailed metrics (feels like, humidity, wind speed, high/low range). Includes a 5-day weather forecast breakdown and modern glassmorphism UI styling.",
        year: "19 October 2026",
        date: "2026-10-19",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: weatherWidgetImg,
        github: "https://github.com/Annet2804/WeatherWidget.git",
        live: "https://annet2804.github.io/WeatherWidget/"
    },
    {
        id: 5,
        title: "Monovision Studio Landing Page",
        shortDescription: "A sleek monochrome portfolio landing page for a photography studio built with CSS Grid and Gulp ",
        year: "07 December 2025",
        date: "2026-10-19",
        technologies: ["HTML", "SCSS", "Gulp"],
        description: "A minimalist black-and-white portfolio website crafted for a creative photography studio. The layout features a bold full-screen hero section, photography category navigation, and multi-column gallery showcases ('Our works' and 'Our inspiration') built using responsive CSS Grid. Engineered with semantic HTML, modular SCSS, and automated via a custom Gulp build workflow.",
        image: monStuImg,
        github: "https://github.com/Annet2804/Monovision-Studio.git",
        live: "https://annet2804.github.io/Monovision-Studio/src/"
    },
];

// Elements from HTML
const gridContainer = document.getElementById('projects-grid');
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalGithub = document.getElementById('modal-github');
const modalLive = document.getElementById('modal-live');
const closeBtn = document.getElementById('close-lightbox');

function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Close / Open Filter
const buttonCloseFilter = document.getElementById('buttonCloseFilter');
const filterContainer = document.getElementById('filterContainer');
const backgroundForFilter = document.getElementById('backgroundForFilter');
const buttonOpenFilter = document.getElementById('buttonOpenFilter');
const applyFiltersBtn = document.getElementById('applyFiltersBtn');

function closeFilter() {
    filterContainer?.classList.add('-translate-x-[350px]');
    backgroundForFilter?.classList.add('opacity-0', 'pointer-events-none');
}

function openFilter() {
    filterContainer?.classList.remove('-translate-x-[350px]');
    backgroundForFilter?.classList.remove('opacity-0', 'pointer-events-none');
}

buttonCloseFilter?.addEventListener('click', closeFilter);
buttonOpenFilter?.addEventListener('click', openFilter);

backgroundForFilter?.addEventListener('click', (e) => {
    if (e.target === backgroundForFilter) {
        closeFilter();
    }
});

const techCheckboxes = document.querySelectorAll('input[name="tech"]');
const allTechCheckbox = document.querySelector('input[name="tech"][value="all"]');

// Рендер карток у сітку з твоєю версткою, перекладами та модалкою
function renderProjects(items) {
    if (!gridContainer) return;
    gridContainer.innerHTML = "";

    if (items.length === 0) {
        gridContainer.innerHTML = `<p class="text-(--color-cream) text-center col-span-full py-10">No projects found.</p>`;
        return;
    }

    items.forEach((project) => {
        const titleKey = `description.title${project.id}`;
        const descKey = `description.description${project.id}`;

        const card = document.createElement('div');
        card.className = 'bg-(--color-secondary) dark:bg-(--color-secondary-lightBrown2) hover:dark:bg-(--color-secondary-lightBrown) hover:bg-(--color-block-main) border border-(--color-cream) rounded-xl overflow-hidden shadow-lg hover:border-(--color-cream) transition-all duration-300 cursor-pointer group flex flex-col';

        card.innerHTML = `
            <div class="h-65 overflow-hidden relative">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>

            <div class="p-3 flex flex-col flex-1 justify-between">
                <h3 data-i18n="${titleKey}" class="text-[12px] text-(--color-cream) group-hover:text-(--color-cream) transition-colors truncate">${project.title}</h3>
                <p data-i18n="${descKey}" class="text-(--color-text-light) text-[10px] mt-1 line-clamp-2">${project.shortDescription}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            if (modalImg) {
                modalImg.src = project.image;
                modalImg.alt = project.title;
            }
            if (modalTitle) {
                modalTitle.setAttribute('data-i18n', titleKey);
                modalTitle.textContent = project.title;
            }
            if (modalDesc) {
                modalDesc.setAttribute('data-i18n', descKey);
                modalDesc.textContent = project.description;
            }

            const activeLang = localStorage.getItem('lang') || document.documentElement.lang || 'en';
            updateLanguage(activeLang);

            if (modalGithub) modalGithub.href = project.github;
            if (modalLive) modalLive.href = project.live;

            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            }
        });

        gridContainer.appendChild(card);
    });

    const activeLang = localStorage.getItem('lang') || document.documentElement.lang || 'en';
    updateLanguage(activeLang);
}

// Фільтрація та сортування
function filterAndSortProjects() {
    let filtered = [...projects];

    // 1. Фільтрація за технологіями
    const selectedTechs = Array.from(techCheckboxes)
        .filter(cb => cb.checked && cb.value !== "all")
        .map(cb => cb.value.toLowerCase());

    const isAllChecked = allTechCheckbox ? allTechCheckbox.checked : true;

    if (!isAllChecked && selectedTechs.length > 0) {
        filtered = filtered.filter(project =>
            Array.isArray(project.technologies) &&
            project.technologies.some(tech =>
                selectedTechs.some(selected => tech.toLowerCase().includes(selected))
            )
        );
    }

    // 2. Сортування за датою
    const sortValue = document.querySelector('input[name="sort"]:checked')?.value || "newest";

    filtered.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return sortValue === "newest" ? dateB - dateA : dateA - dateB;
    });

    renderProjects(filtered);
}

// Взаємодія чекбокса "All" з іншими технологіями
techCheckboxes.forEach(cb => {
    cb.addEventListener("change", (e) => {
        if (e.target.value === "all" && e.target.checked) {
            techCheckboxes.forEach(item => {
                if (item.value !== "all") item.checked = false;
            });
        } else if (e.target.value !== "all" && e.target.checked) {
            if (allTechCheckbox) allTechCheckbox.checked = false;
        }

        const anyChecked = Array.from(techCheckboxes).some(item => item.checked);
        if (!anyChecked && allTechCheckbox) {
            allTechCheckbox.checked = true;
        }
    });
});

// Застосування змін лише після натискання Add Changes
applyFiltersBtn?.addEventListener("click", () => {
    filterAndSortProjects();
    closeFilter();
});

// Перший рендер при завантаженні сторінки
filterAndSortProjects();