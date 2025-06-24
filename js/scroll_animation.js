document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll('.timeline-content');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  contents.forEach(el => observer.observe(el));
});
