function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// aos 
AOS.init();



window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
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

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const h1 = document.querySelector(".home-h1");
  const p = document.querySelector(".home-p");
  const img = document.querySelector(".home-img");

  // Preloader tugagach (masalan, 2.2 soniya ichida)
  setTimeout(() => {
    preloader.style.display = "none";

    // HOME bo‘limga animatsiya qo‘shamiz
    h1.classList.add("animate");
    p.classList.add("animate");
    img.classList.add("animate");
  }, 2200); // Preloader animatsiyasi tugash vaqti
});
