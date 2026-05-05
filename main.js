// Бургер меню
const burgerMenu = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header__nav');

if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
        const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true';
        burgerMenu.setAttribute('aria-expanded', !isExpanded);
        headerNav.classList.toggle('is-open');
        
        // Анимация бургера
        const spans = burgerMenu.querySelectorAll('span');
        if (headerNav.classList.contains('is-open')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Закрытие меню при клике на ссылку
document.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
        headerNav.classList.remove('is-open');
        burgerMenu.setAttribute('aria-expanded', 'false');
        const spans = burgerMenu.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Закрытие верхней плашки
const topBarClose = document.querySelector('.top-bar__close');
const topBar = document.querySelector('.top-bar');
if (topBarClose && topBar) {
    topBarClose.addEventListener('click', () => {
        topBar.style.display = 'none';
    });
}