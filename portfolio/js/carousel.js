// Skills Carousel Auto-scroll
const skillsCarousel = document.querySelector(".skills-carousel");
let scrollAmount = 0;
let autoScrollInterval;

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    if (skillsCarousel) {
      scrollAmount += 1;
      if (
        scrollAmount >=
        skillsCarousel.scrollWidth - skillsCarousel.clientWidth
      ) {
        scrollAmount = 0;
      }
      skillsCarousel.scrollLeft = scrollAmount;
    }
  }, 30);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Start auto-scroll
if (skillsCarousel) {
  startAutoScroll();

  // Pause on hover
  skillsCarousel.addEventListener("mouseenter", stopAutoScroll);
  skillsCarousel.addEventListener("mouseleave", startAutoScroll);
}
