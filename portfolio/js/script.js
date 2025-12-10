// Netflix-style Loading Animation
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1000);
});

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    // Close mobile menu if open
    if (navLinks && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
    }
  });
});

// Netflix-style Parallax Effect on Hero
window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero");
  const scrolled = window.pageYOffset;
  if (hero) {
    const rate = scrolled * 0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Netflix-style Hover Effects for Project Cards
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
    this.style.zIndex = "10";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
    this.style.zIndex = "1";
  });
});
