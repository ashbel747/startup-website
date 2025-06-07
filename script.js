const toggleButton = document.getElementById("themeToggle");
const themeIcon = toggleButton.querySelector(".theme-icon");
const body = document.body;

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    
    if (isDark) {
        body.classList.remove("light-mode");
        themeIcon.textContent = "☀️";
    } else{
        body.classList.add("light-mode");
        themeIcon.textContent = "🌙";
    }
});

toggleButton.addEventListener("click", () => {
    const isLight = body.classList.toggle("light-mode")
    const isDark = !isLight;
    themeIcon.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});
document.querySelectorAll('.navigation-link').forEach(link => {
    link.addEventListener('click', function (e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});