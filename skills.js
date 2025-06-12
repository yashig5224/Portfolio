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