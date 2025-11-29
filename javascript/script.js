// ==================== MOBILE MENU TOGGLE ====================
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  
  // Toggle menu open/close
  navLinks.classList.toggle('open');
  menuButton.classList.toggle('open');
  
  // Update ARIA attribute for accessibility
  menuButton.setAttribute('aria-expanded', !isExpanded);
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      menuButton.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
});

// ==================== CONTACT FORM SUBMISSION ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission

  // Get all input fields
  const inputs = contactForm.querySelectorAll('input, textarea');
  let allFilled = true;

  // Check if any field is empty
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      allFilled = false;
    }
  });

  // Show appropriate alert
  if (allFilled) {
    alert("Form submitted successfully!");
    contactForm.reset(); // Clear the form
  } else {
    alert("Please fill out all fields before submitting.");
  }
});