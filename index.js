// script.js
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  // Toggles the dark-mode class
  document.body.classList.toggle("dark-mode");

  // Switch the icon based on the theme
  themeToggle.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
