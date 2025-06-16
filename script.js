
// dropdown menu 
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


// aos 
AOS.init();


// navbar change color 
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


// preloader
const preloader = document.getElementById('preloader');
  const start = Date.now();

  window.addEventListener('load', function () {
    const elapsed = Date.now() - start;
    const delay = Math.max(2220 - elapsed, 0); // минимум 2 сек
    setTimeout(() => {
      preloader.classList.add('hidden');
      setTimeout(() => preloader.remove(), 500); // удалить после анимации
    }, delay);
  });
