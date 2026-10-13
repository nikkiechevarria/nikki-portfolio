const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const currentYear = document.getElementById("current-year");

function updateThemeButton(isLightMode) {
    if (isLightMode) {
        themeIcon.textContent = "☾";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
        themeToggle.setAttribute("aria-pressed", "true");
    } else {
        themeIcon.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
        themeToggle.setAttribute("aria-pressed", "false");
    }
}

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
}

updateThemeButton(document.body.classList.contains("light"));

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light");

    const isLightMode = document.body.classList.contains("light");

    updateThemeButton(isLightMode);

    localStorage.setItem(
        "portfolio-theme",
        isLightMode ? "light" : "dark"
    );
});

currentYear.textContent = new Date().getFullYear();