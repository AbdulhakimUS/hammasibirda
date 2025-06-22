// ============ TOGGLE MENU ============
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// ============ AOS ============
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 769) {
    AOS.init({
      duration: 800,
      once: true,
    });
  } else {
    document.querySelectorAll("[data-aos]").forEach((el) => {
      el.removeAttribute("data-aos");
    });
  }
});

// ============ NAVBAR SCROLL EFFECT ============
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ============ PRELOADER ============
const preloader = document.getElementById("preloader");
const h1 = document.querySelector(".home-h1");
const p = document.querySelector(".home-p");
const img = document.querySelector(".home-img");
const start = Date.now();

window.addEventListener("load", () => {
  const elapsed = Date.now() - start;
  const delay = Math.max(2200 - elapsed, 0);
  setTimeout(() => {
    preloader.classList.add("hidden");
    setTimeout(() => {
      preloader.remove();
      h1.classList.add("animate");
      p.classList.add("animate");
      img.classList.add("animate");
    }, 500);
  }, delay);
});

// ============ COUNTERS ============
const counters = document.querySelectorAll(".count");
let hasAnimated = false;

function animateCounters() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let increment;
    if (target === 5 || target === 15) increment = 1;
    else if (target === 70) increment = 5;

    const steps = target / increment;
    const interval = 1200 / steps;
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

// ============ OBSERVER LINE ANIMATIONS ============
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".observe-target");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  targets.forEach((target) => observer.observe(target));
});

// ============ NAVIGATION & SEARCH ============
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, div[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const searchInput = document.querySelector(".search-input");
  const navLinksContainer = document.getElementById("navLinks");
  const searchDiv = document.querySelector(".search-div");
  const searchButton = document.querySelector(".search-button");


  // Observer: подсвечиваем активный пункт
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    if (section.id) observer.observe(section);
  });

  // Закрытие навбара (если открыт)
  function closeNavMenuIfOpen() {
    if (navLinksContainer.classList.contains("active")) {
      navLinksContainer.classList.remove("active");
    }
  }

  // Поиск
  function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    let found = false;

    closeNavMenuIfOpen(); // Закрыть меню при поиске

    sections.forEach((section) => {
      const id = section.id.toLowerCase();
      const text = section.textContent.toLowerCase();

      if (!found && (id.includes(query) || text.includes(query))) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        found = true;
      }
    });

    if (!found) {
      alert("Hech narsa topilmadi");
    }

    searchInput.value = "";
  }

  searchInput.addEventListener("focus", () => {
    // Закрыть меню, если оно активно
    if (navLinksContainer.classList.contains("active")) {
      navLinksContainer.classList.remove("active");
    }
  });

  

  // Enter в input'е
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  });

  // Клик по ссылке — тоже закрыть меню
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNavMenuIfOpen();
    });
  });
});
