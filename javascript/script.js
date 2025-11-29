// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact Form Handler
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  successMessage.style.display = "block";
  successMessage.classList.add("show");

  setTimeout(() => {
    form.reset();
    successMessage.style.display = "none";
  }, 2500);
});

// Navbar Animation On Scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 80) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
});
