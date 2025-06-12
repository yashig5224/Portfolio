document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("modeToggle");
  const html = document.documentElement;

  // Set initial theme
  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  // Toggle theme on click
  toggleBtn.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
  });

  // Optional: Animate social icons (glow on hover)
  const icons = document.querySelectorAll(".social-links a img");

  icons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.15)";
      icon.style.filter = "drop-shadow(0 0 8px var(--accent))";
    });

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1)";
      icon.style.filter = "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.15))";
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const text = "Hello, I'm Yashi Gupta";
  const speed = 100; // typing speed in ms
  let index = 0;
  const typewriterElement = document.getElementById("typewriter");

  function typeWriter() {
    if (index < text.length) {
      typewriterElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

