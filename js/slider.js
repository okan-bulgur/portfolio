  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("dots");

  function initDots() {
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
    updateDots();
  }

  function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateSlider();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
  }

  function updateSlider() {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
    });
    updateDots();
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll("span");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  initDots();
  updateSlider();