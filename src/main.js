import './style.css'


//анімація друку
// swiper
//тільки основна сторінка

const swiperEl = document.querySelector('.mySwiper');
if (swiperEl) {
const swiper = new Swiper('.mySwiper', {
    effect: 'cards',
    grabCursor: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    cardsEffect: {
        perSlideRotate: 5,
        perSlideOffset: 5,
        slideShadows: true,
    },
});
}

//тільки основна сторінка
const scrollBtn = document.getElementById('scrollToTopBtn');
if (scrollBtn) {
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {

        scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollBtn.classList.add('opacity-100', 'pointer-events-auto');
    } else {

        scrollBtn.classList.add('opacity-0', 'pointer-events-none');
        scrollBtn.classList.remove('opacity-100', 'pointer-events-auto');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});}

//відкрити модальне вікно, на обох
const openModalBtn = document.getElementById('openModalBtn');
const modalWindow = document.getElementById('modalWindow');
const form = document.getElementById('form');
const closeBtn = document.getElementById('close');


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollBtn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
        scrollBtn.classList.add('opacity-0', 'pointer-events-none');
        scrollBtn.classList.remove('opacity-100', 'pointer-events-auto');
    }
});


scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


if (openModalBtn && modalWindow) {

    openModalBtn.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
    });

    // АВТОМАТИЧНЕ ВІДКРИТТЯ ЧЕРЕЗ 20 СЕКУНД ПІСЛЯ ЗАВАНТАЖЕННЯ
    setTimeout(() => {
        modalWindow.style.display = 'flex';
    }, 50000); // 20000 мс = 20 секунд


    modalWindow.addEventListener('click', () => {
        modalWindow.style.display = 'none';
    });

    if (form) {
        form.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            modalWindow.style.display = 'none';
        });
    }
}

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
}


//зміна теми на обох
const themeSwitch = document.getElementById('theme-switch');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    if (themeSwitch) themeSwitch.checked = true;
} else {
    document.documentElement.classList.remove('dark');
    if (themeSwitch) themeSwitch.checked = false;
}

if (themeSwitch) {
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    });
}



//словник , на обох
const translations = {
    en:{
        nav: {
            about: "ABOUT ME",
            skills: "SKILLS",
            portfolio: "PORTFOLIO",
            contacts: "CONTACTS"
        },

        hero: {
            title: "FRONTEND DEVELOPER",
            description: "Hi, I’m Anna Zakharova — a Frontend Developer who builds modern, user-friendly, and functional web applications. I combine technical skills with a creative approach to bring ideas to life",
            button: "MY PORTFOLIO"
        },

        sidebar: {
            name: "ANNA ZAKHAROVA",
            role: "FRONTEND DEVELOPER",
            location: "Sumy, Ukraine",
            age: "23 y.o.",
            languages_title: "Languages",
            native: "native",
            lang_ua: "Ukrainian",
            lang_en: "English",
            skills_title: "Skills",
            education_title: "Education & Courses",
            edu_1: "Bachelor in Computer Science (Sumy State University) - 01.09.2020-30.06.2024",
            edu_2: "Master’s Degree in Management (Sumy State University) - 01.09.2024-31.01.2026",
            edu_3: "IT Step Academy, Front end Certificate - 01.09.2025-25.11.2026",
            edu_4: "Erasmus+ Academic Mobility Program (Lodz University of Technology, Poland) - 08.03.2026-12.07.2026",
            edu_5: "Sumy Ukrainian-British Linguistic Centre, FCE  - 01.09.2025-Current",
            edu_6: "Master’s in Hotel and Restaurant Business (NTU KhPI) - 01.09.2025-Current",

            contacts_title: "Contacts",
            hobbies_title: "Hobbies",
            hobby_1: "Designing website interfaces",
            hobby_2: "Engage in sports activities",
            hobby_3: "Reading books"
        },

        about: {
            title: "About me",
            description: "Hi! I'm Anna Zakharova, a beginner frontend developer focused on creating beautiful, flexible, and user-friendly websites. With a background in Computer Science and current studies at IT Step Academy, I’m building strong skills in HTML, CSS, Git, and GitHub, while actively learning JavaScript.<br><br>My eye for design and experience with Figma help me craft interfaces that are not only functional but also visually engaging. I’m eager to grow as part of a team, contribute to real-world projects, and continuously improve my development skills",
            button: "MY PORTFOLIO"
        },

        skills_section: {
            slide1_title: "FRONTEND DEVELOPMENT",
            slide1_subtitle: "Core Tech Stack:",
            slide1_note: "IT Step Academy — completed a course with a certificate",

            slide2_title: "ENGLISH PROFICIENCY",
            slide2_subtitle: "Level & Practice:",
            slide2_note: "Preparing for official FCE certification exam",

            slide3_title: "WEB DESIGN",
            slide3_subtitle: "Design Skills:",
            slide3_note: "Udemy web design courses & practice",

            slide4_title: "PRACTICE & PROJECTS",
            slide4_subtitle: "Real Experience:",
            slide4_note: "Building real apps from idea to deploy",

            title: "My skills",
            description: "I aim to create flexible, modern, and visually appealing websites that combine user-friendly design with clean, high-quality code",
            skill_1: "Mobile-First Approach",
            skill_2: "Rapid Dev Tailwind CSS",
            skill_3: "Pixel Perfect"
        },

        why_me: {
            title: "WHY ME?",
            card1_title: "Git & Workflow",
            card1_desc: "Version control, branching, code review",
            card2_title: "Fast Learner",
            card2_desc: "Quick adaptation to new tools, frameworks",
            card3_title: "Responsibility",
            card3_desc: "Strict adherence to deadlines",
            card4_title: "Attention to Detail",
            card4_desc: "Pixel-perfect layout, clean styling"
        },

        works: {
            title: "My works",
            description: "My projects show how I combine design and coding skills to create websites that look good and work well on any device",
            button: "MY PORTFOLIO"
        },

        contacts: {
            title: "Contacts",
            description: "You can always find me on these social platforms — I’m open to communication, feedback, and happy to collaborate"
        },

        footer: {
            rights: "© 2026 Anna Zakharova. All rights reserved"
        },

        modal: {
            title: "Get in Touch",
            subtitle: "Leave a message, and I'll get in touch with you!",
            name_label: "Name",
            email_label: "Email",
            message_label: "Message",
            submit_btn: "Submit"
        },

        portfolio:{
            title: "My Works",
            subtitle: "I hope you enjoy exploring my work! Take a look around :)",
            button_return: "Return to Main Page",
            button_open_filter: "Open Filter",
        },

        description:{
            title1: "ABC Auto Landing Page",
            description1: "A modern, responsive landing page for an official car dealership. The UI features dynamic promo banners, brand-filtered catalog listings, customer review sections, and interactive elements like a car loan calculator. Built with HTML, CSS, and Tailwind CSS, focusing on clean layout structure, crisp visual hierarchy, and cross-device responsiveness.",

            title2: "Ceramic Soul Landing Page",
            description2: "A minimal and aesthetic landing page designed for a handmade ceramics brand and workshop. The UI features showcase sections for handcrafted pottery, masterclass information, an interactive contact form, and a responsive image slider highlighting recent works. Built with modern HTML, modular SCSS, and Vite, leveraging Swiper for smooth gallery sliders and Just-Validate for seamless form validation.",

            title3: "Flappy Bird Game",
            description3: "A fun and engaging Flappy Bird browser game featuring real-time score tracking, collision detection, and custom skins (bird and obstacle models). Includes state management for game over screens, custom control buttons, and options to restart or swap skins seamlessly.",

            title4: "Weather Widget App",
            description4: "A sleek browser weather application featuring real-time city search, dynamic weather icons, current time with timezone awareness, and detailed metrics (feels like, humidity, wind speed, high/low range). Includes a 5-day weather forecast breakdown and modern glassmorphism UI styling.",

            title5: "Monovision Studio Landing Page",
            description5: "A minimalist black-and-white portfolio website crafted for a creative photography studio. The layout features a bold full-screen hero section, photography category navigation, and multi-column gallery showcases ('Our works' and 'Our inspiration') built using responsive CSS Grid. Engineered with semantic HTML, modular SCSS, and automated via a custom Gulp build workflow.",
        },

        filter:{
            title: "Filters",
            button_close_filter: "Close",
            subtitle1: "Sort",
            subtitle2: "Technologies",
            button_new: "Newest",
            button_old: "Oldest",
            button_all: "All",
            apply_changes: "Add Changes",
        }
    },

    uk: {
        nav: {
            about: "ПРО МЕНЕ",
            skills: "НАВИЧКИ",
            portfolio: "ПРОЄКТИ",
            contacts: "КОНТАКТИ"
        },

        hero: {
            title: "FRONTEND-РОЗРОБНИЦЯ",
            description: "Привіт, я Анна Захарова — Frontend-розробниця, яка створює сучасні, зручні та функціональні вебдодатки. Поєдную технічні навички з творчим підходом, щоб втілювати ідеї в життя",
            button: "МОЄ ПОРТФОЛІО"
        },

        sidebar: {
            name: "АННА ЗАХАРОВА",
            role: "FRONTEND-РОЗРОБНИЦЯ",
            location: "Суми, Україна",
            age: "23 р.",
            languages_title: "Мови",
            native: "рідна",
            lang_ua: "Українська",
            lang_en: "Англійська",
            skills_title: "Навички",
            education_title: "Освіта та курси",
            edu_1: "Бакалавр з комп'ютерних наук (Сумський державний університет) - 01.09.2020-30.06.2024",
            edu_2: "Магістр з менеджменту (Сумський державний університет) - 01.09.2024-31.01.2026",
            edu_3: "IT Step Academy, Front end Certificate - 01.09.2025-25.11.2026",
            edu_4: "Erasmus+ Академічна мобільність (Лодзинський технічний університет, Польща) - 08.03.2026-12.07.2026",
            edu_5: "Sumy Ukrainian-British Linguistic Centre, FCE  - 01.09.2025-Current",
            edu_6: 'Магістр з готельно-ресторанної справи (НТУ ХПІ) - 01.09.2025-Current',
            contacts_title: "Контакти",
            hobbies_title: "Хобі",
            hobby_1: "Дизайн інтерфейсів сайтів",
            hobby_2: "Заняття спортом",
            hobby_3: "Читання книг"
        },


        about: {
            title: "Про мене",
            description: "Привіт, я Анна Захарова — початківиця Frontend-розробниця, яка фокусується на створенні красивих, гнучких та зручних вебсайтів. Маючи базу з комп'ютерних наук та навчаючись в IT Step Academy, я вдосконалюю навички в HTML, CSS, Git та GitHub, активно вивчаючи JavaScript.<br><br>Моє бачення дизайну та досвід роботи у Figma допомагають мені створювати не лише функціональні, а й візуально привабливі інтерфейси. Прагну розвиватися в команді, долучатися до реальних проєктів та постійно вдосконалювати свої навички розробки",
            button: "МОЄ ПОРТФОЛІО"
        },

        skills_section: {
            slide1_title: "FRONTEND-РОЗРОБКА",
            slide1_subtitle: "Основний стек технологій:",
            slide1_note: "IT Step Academy — завершила курс із сертифікатом",

            slide2_title: "АНГЛІЙСЬКА МОВА",
            slide2_subtitle: "Рівень та практика:",
            slide2_note: "Підготовка до офіційного екзамену FCE",

            slide3_title: "ВЕБДИЗАЙН",
            slide3_subtitle: "Дизайн-навички:",
            slide3_note: "Курси вебдизайну на Udemy та практика",

            slide4_title: "ПРАКТИКА ТА ПРОЄКТИ",
            slide4_subtitle: "Реальний досвід:",
            slide4_note: "Створення реальних додатків від ідеї до деплою",

            title: "Мої навички",
            description: "Прагну створювати гнучкі, сучасні та візуально привабливі сайти, які поєднують зручний дизайн із чистим та якісним кодом",
            skill_1: "Підхід Mobile-First",
            skill_2: "Швидка розробка на Tailwind CSS",
            skill_3: "Піксель-перфект верстка"
        },

        why_me: {
            title: "ЧОМУ Я?",
            card1_title: "Git та Workflow",
            card1_desc: "Контроль версій, гілки, рев'ю коду",
            card2_title: "Швидке навчання",
            card2_desc: "Швидка адаптація до нових інструментів",
            card3_title: "Відповідальність",
            card3_desc: "Суворе дотримання дедлайнів",
            card4_title: "Увага до деталей",
            card4_desc: "Піксель-перфект верстка, чистий стилінг"
        },

        works: {
            title: "Мої роботи",
            description: "Мої проєкти демонструють, як я поєдную навички дизайну та кодування для створення сайтів, які гарно виглядають і чудово працюють на будь-якому пристрої",
            button: "МОЄ ПОРТФОЛІО"
        },

        contacts: {
            title: "Контакти",
            description: "Ви завжди можете знайти мене в цих соціальних мережах — я відкрита до спілкування, відгуків та рада співпраці"
        },

        footer: {
            rights: "© 2026 Anna Zakharova. Всі права захищені"
        },
        modal: {
            title: "Зв'язатися зі мною",
            subtitle: "Залиште повідомлення, і я зв'яжуся з вами!",
            name_label: "Ім'я",
            email_label: "Ел. пошта",
            message_label: "Повідомлення",
            submit_btn: "Надіслати"
        },

        portfolio:{
            title: "МОЇ РОБОТИ",
            subtitle: "Сподіваюся, мої роботи Вам сподобаються! Запрошую до перегляду :)",
            button_return: "Повернутись на Головну сторінку",
            button_open_filter: "Відкрити фільтр",
        },

        description:{
            title1: "Лендінг-сторінка ABC Auto",
            description1: "Сучасний адаптивний лендінг для офіційного автодилера. Інтерфейс містить динамічні промобанери, каталог автомобілів із фільтрацією за брендами, блок із відгуками клієнтів та інтерактивні елементи, зокрема кредитний автокалькулятор. Сайт створено за допомогою HTML, CSS і Tailwind CSS з акцентом на чисту структуру верстки, чітку візуальну ієрархію та коректне відображення на різних пристроях.",

            title2: "Лендінг-сторінка Ceramic Soul",
            description2: "Мінімалістичний та естетичний лендінг, створений для бренду й майстерні кераміки ручної роботи. Інтерфейс містить вітрину авторського посуду, інформацію про майстер-класи, інтерактивну форму зворотного зв’язку та адаптивний слайдер із прикладами останніх робіт. Проєкт реалізовано на сучасному HTML, модульному SCSS та Vite із використанням бібліотеки Swiper для плавної роботи галереї та Just-Validate для зручної валідації форми.",

            title3: "Гра Flappy Bird",
            description3: "Динамічна та захоплива браузерна гра Flappy Bird із підрахунком рахунку в реальному часі, детекцією зіткнень і кастомними скінами (моделями птаха та перешкод). Реалізовано керування станами (зокрема екраном завершення гри), власні кнопки керування та можливість швидко перезапустити гру чи змінити скіни.",

            title4: "Додаток Weather Widget",
            description4: "Лаконічний браузерний погодний додаток із пошуком міста в реальному часі, динамічними іконками погоди, поточним часом з урахуванням часового поясу та детальними метриками (відчувається як, вологість, швидкість вітру, діапазон мінімальної та максимальної температури). Передбачено прогноз погоди на 5 днів і сучасний інтерфейс у стилі гласморфізму.",

            title5: "Лендінг Monovision Studio",
            description5: "Мінімалістичний чорно-білий лендінг, створений для креативної фотостудії. Макет містить виразний повноекранний головний екран, навігацію за категоріями фотографії та багатоколонкові галереї («Our works» і «Our inspiration»), побудовані за допомогою адаптивного CSS Grid. Розроблено з використанням семантичного HTML, модульного SCSS та автоматизовано через кастомну збірку Gulp.",

        },

        filter:{
            title: "Фільтр",
            button_close_filter: "Закрити",
            subtitle1: "Сортувати За",
            subtitle2: "Технології",
            button_new: "Нові",
            button_old: "Старі",
            button_all: "ВСІ",
            apply_changes: "Додати зміни",
        }
    },
}

let currentLang = localStorage.getItem('lang') || 'en';
let typingTimeout = null;

const langDropdown = document.getElementById('lang-dropdown');
const langToggleBtn = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');
const langArrow = document.getElementById('lang-arrow');
const langOptions = document.querySelectorAll('.lang-option');

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => prev && prev[curr], obj);
}

function setMenuOpen(isOpen) {
    if (!langMenu || !langToggleBtn) return;

    langToggleBtn.setAttribute('aria-expanded', String(isOpen));

    langMenu.classList.toggle('invisible', !isOpen);
    langMenu.classList.toggle('opacity-0', !isOpen);
    langMenu.classList.toggle('translate-y-1', !isOpen);
    langMenu.classList.toggle('pointer-events-none', !isOpen);

    langMenu.classList.toggle('visible', isOpen);
    langMenu.classList.toggle('opacity-100', isOpen);
    langMenu.classList.toggle('translate-y-0', isOpen);
    langMenu.classList.toggle('pointer-events-auto', isOpen);

    if (langArrow) {
        langArrow.classList.toggle('rotate-180', isOpen);
    }
}

function updateActiveOptionUI(lang) {
    langOptions.forEach((btn) => {
        const isSelected = btn.dataset.lang === lang;
        btn.classList.toggle('bg-(--color-cream)/15', isSelected);
        btn.classList.toggle('underline', isSelected);
        btn.classList.toggle('underline-offset-4', isSelected);
    });
}

function runTypeWriter(element, text) {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }

    element.textContent = '';
    let charIndex = 0;
    const typingSpeed = 30;

    function typeWriter() {
        if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
            typingTimeout = setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();
}

export function updateLanguage(lang) {
    const dict = translations[lang] || translations.en;
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach((element) => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(dict, key);

        if (typeof translation === 'string') {
            if (key === 'hero.description') {
                runTypeWriter(element, translation);
            } else if (key === 'about.description' || element.getAttribute('data-i18n-html') === 'true') {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    updateActiveOptionUI(lang);
    document.documentElement.lang = lang;
}

function selectLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateLanguage(lang);
    setMenuOpen(false);
}

langToggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = langToggleBtn.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isExpanded);
});

langOptions.forEach((option) => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        const chosenLang = option.dataset.lang;
        selectLanguage(chosenLang);
    });
});

document.addEventListener('click', (e) => {
    if (langDropdown && !langDropdown.contains(e.target)) {
        setMenuOpen(false);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        setMenuOpen(false);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
});



