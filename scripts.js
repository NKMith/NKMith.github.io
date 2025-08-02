document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for nav links
  document.querySelectorAll('nav a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Smooth scroll for "Find out who I am" button
  const heroBtn = document.querySelector('.hero-btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', function(e) {
      const introSection = document.querySelector('#intro-text');
      if (introSection) {
        e.preventDefault();
        introSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Typing effect for hero name
  const name = "Nicholas Kim";
  const target = document.getElementById('typed-name');
  const cursor = document.getElementById('typed-cursor');
  let i = 0;
  function type() {
    if (i <= name.length) {
      target.textContent = name.slice(0, i);
      cursor.style.display = "inline-block";
      i++;
      setTimeout(type, 25);
    } else {
      cursor.style.display = "inline-block";
    }
  }
  type();
});