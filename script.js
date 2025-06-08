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

document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("visitor-count");
    let visitCount = localStorage.getItem("visitCount");
    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    localStorage.setItem("visitCount", visitCount);
    counterElement.textContent = visitCount;
});

const faqs = document.querySelectorAll(".faq-card");

faqs.forEach(faq => {
    const question = faq.querySelector(".faq-question");

    question.addEventListener("click", () => {
        faqs.forEach(f => {
            if (f !==faq) {
                f.classList.remove("open");
            }
        });

        faq.classList.toggle("open");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-tr");
    const dots = document.querySelectorAll(".carousel-dots .dot");
    let currentIndex = 0;

    function getVisibleCards() {
        const width = window.innerWidth;
        if (width <= 500) return 1;
        if (width <= 768) return 2;
        return 3;
    }

    function updateCarousel() {
        const visibleCards = getVisibleCards();
        const cardWidth = document.querySelector(".vehicle-card").offsetWidth + 16; 
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    window.addEventListener("resize", () => {
        updateCarousel();
    });

    updateCarousel(); 
});

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("audienceToggle");
    const buyerInfo = document.getElementById("buyerInfo");
    const sellerInfo = document.getElementById("seller-info");
    const buyerPart = document.getElementById("buyer-part");
    const sellerPart = document.getElementById("seller-part");

    buyerInfo.classList.add("active");
    sellerInfo.classList.remove("active");

    toggle.addEventListener("change", () => {
        const isSeller = toggle.checked;

        if (isSeller) {
            buyerInfo.classList.remove("active");
            sellerInfo.classList.add("active");

            buyerPart.classList.remove("activate");
            sellerPart.classList.add("activate");
        } else {
            sellerInfo.classList.remove("active");
            buyerInfo.classList.add("active");

            sellerPart.classList.remove("activate");
            buyerPart.classList.add("activate");
        }
    });
});


