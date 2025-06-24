const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots");
const totalSlides = slider.children.length;
let currentSlide = 0;

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  const dots = dotsContainer.children;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.toggle("active", i === currentSlide);
  }
}

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

updateSlider();
