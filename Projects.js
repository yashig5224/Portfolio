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

// ======= Project Filtering =======
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const projectCards = document.querySelectorAll('.project-card');

searchInput?.addEventListener('input', filterProjects);
categoryButtons?.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    // Add to clicked one
    button.classList.add('active');
    filterProjects();
  });
});

function filterProjects() {
  const searchText = searchInput?.value.toLowerCase() || '';
  const activeCategory = document.querySelector('.category-btn.active')?.dataset.category || 'all';

  projectCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const category = card.dataset.category?.toLowerCase() || 'all';

    const matchesSearch = title.includes(searchText);
    const matchesCategory = activeCategory === 'all' || category === activeCategory;

    if (matchesSearch && matchesCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
