// ======= Theme Toggle =======
const modeToggle = document.getElementById('modeToggle');
const rootElement = document.documentElement;

function setTheme(theme) {
  rootElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  modeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Toggle theme
modeToggle.addEventListener('click', () => {
  const newTheme = rootElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Optional: Basic form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // You can connect this to Formspree or EmailJS here
    alert("Thanks for your message, " + name + "! I'll get back to you soon.");

    form.reset();
  });
});
