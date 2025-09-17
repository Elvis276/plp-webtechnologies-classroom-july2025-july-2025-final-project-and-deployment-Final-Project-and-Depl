// Simple interactivity
function showAlert() {
  alert("Hello! You clicked the button.");
}

// Form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        formMessage.textContent = "✅ Thank you for contacting us!";
        formMessage.style.color = "green";
        form.reset();
      } else {
        formMessage.textContent = "❌ Please fill all fields correctly.";
        formMessage.style.color = "red";
      }
    });
  }
});
