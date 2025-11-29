const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get all form fields
  const inputs = form.querySelectorAll("input, textarea");
  let empty = false;

  // Check empty fields
  inputs.forEach(input => {
    if (input.value.trim() === "") {
      empty = true;
    }
  });

  // If empty → show alert
  if (empty) {
    alert("Please fill out all fields!");
    return;
  }

  // Success alert
  alert("Form submitted successfully!");

  // Show success message
  successMessage.style.display = "block";

  // Reload after 4.8 sec
  setTimeout(() => {
    location.reload();
  }, 4800);
});
