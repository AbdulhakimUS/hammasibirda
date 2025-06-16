const toggleBtn = document.querySelector('.navbar-toggler-icon');
const toggleBtnIcon = document.querySelector('.navbar-toggler-icon');
const dropDownMenu = document.querySelector('.Dropdown-menu');

let isOpen = false;

toggleBtn.addEventListener('click', () => {
    dropDownMenu.style.display = isOpen ? 'none' : 'block';
    toggleBtnIcon.className = isOpen
        ? 'fa-solid fa-bars'
        : 'fa-solid fa-xmark';
    isOpen = !isOpen;
});

AOS.init();


document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});