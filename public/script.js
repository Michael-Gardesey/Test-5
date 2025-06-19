// --- Theme toggle (dark/light mode) ---
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Set initial theme from localStorage or system preference
function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.innerHTML = theme === 'dark'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
}

// On load, set theme
(function () {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved ? saved : (prefersDark ? 'dark' : 'light'));
})();

themeToggle.addEventListener('click', function () {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// --- Datetime update ---
function updateDateTime() {
    const dt = new Date();
    const y = dt.getUTCFullYear();
    const m = String(dt.getUTCMonth() + 1).padStart(2, '0');
    const d = String(dt.getUTCDate()).padStart(2, '0');
    const h = String(dt.getUTCHours()).padStart(2, '0');
    const min = String(dt.getUTCMinutes()).padStart(2, '0');
    const s = String(dt.getUTCSeconds()).padStart(2, '0');
    const str = `${y}-${m}-${d} ${h}:${min}:${s} UTC`;
    document.getElementById('datetime-display').textContent = str;
}
setInterval(updateDateTime, 1000);
updateDateTime();
