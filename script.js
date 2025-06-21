function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// aos
AOS.init();

// navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// preloader
const preloader = document.getElementById("preloader");
const start = Date.now();

window.addEventListener("load", function () {
  const elapsed = Date.now() - start;
  const delay = Math.max(2220 - elapsed, 0); // минимум 2 сек
  setTimeout(() => {
    preloader.classList.add("hidden");
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

const elapsed = Date.now() - start;
const delay = Math.max(2220 - elapsed, 0); // минимум 2 сек
setTimeout(() => {
  preloader.classList.add("hidden");
  setTimeout(() => preloader.remove(), 500); // удалить после анимации
}, delay);

//   raview
const counters = document.querySelectorAll(".count");
let hasAnimated = false;

const duration = 1200; // общая длительность анимации (мс)

function animateCounters() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");

    // Задаем шаг в зависимости от числа
    let increment;
    if (target === 5 || target === 15) {
      increment = 1;
    } else if (target === 70) {
      increment = 5;
    }

    const steps = target / increment;
    const interval = duration / steps;
    let current = 0;

    const counterInterval = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.innerText = target.toLocaleString();
        clearInterval(counterInterval);
      } else {
        counter.innerText = current.toLocaleString();
      }
    }, interval);
  });
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

window.addEventListener("scroll", () => {
  const section = document.getElementById("stats");
  if (isInViewport(section) && !hasAnimated) {
    animateCounters();
    hasAnimated = true;
  }
});

// line between sections
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".observe-target");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          obs.unobserve(entry.target); // отключить после одного срабатывания
        }
      });
    },
    {
      threshold: 0.5, // элемент должен быть виден на 50%
    }
  );

  targets.forEach((target) => observer.observe(target));
});

//   togglemenu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section, div[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    }, {
      threshold: 0.5
    });
  
    sections.forEach(section => {
      if (section.id) {
        observer.observe(section);
      }
    });
  });
  
