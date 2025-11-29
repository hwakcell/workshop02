// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open');
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Form Validation + Alert
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input, textarea');
  let filled = true;
  inputs.forEach(input => { if (!input.value.trim()) filled = false; });

  if (filled) {
    alert("Form submitted successfully!");
    e.target.reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});