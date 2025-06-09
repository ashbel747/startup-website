//Adding light mode toggle
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

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector(".submit-btn button");

    submitBtn.addEventListener("click", () => {
        alert("Thanks for submitting. We'll reach you once we launch!");
    });
});

// Personal context for the AI chatbot
        const personalContext = `
        You are an AI assistant representing Khaled Motors, a car marketplace. Here's the comprehensive information about Khaled Motors:

        COMPANY BACKGROUND:
        - Name: Khaled Motors
        - Location: Thika, Kenya
        - Role: Car marketplace
        - Passion: Empowering people to own their dream cars by providing seamless experiences.

        Origin story:
        - The website offers a marketplace of buying and selling a  locally used car and the process is easy and transparent.It offers straight-forward details of a specific car and you can easily own the car that fits your budget. We came up with this idea as three individuals, Nathaniel, Liroy and I as the main founder. The website showcases different cars at affordable prices.

        FEATURED PRODUCTS:
        1. Toyota Crown 2015 black:
           - About:  Has Safety-first features that provide maximum protection
           - Features: Has built-in airbags, traction control and an accident-free history
           - Impact:  Provides maximum protection to the passengers and also increases the buyer confidence of the car reliability.
           - Price: Ksh. 2,200,000

        2. Range Rover 2017 white:
           - About:  Comfort meets performance
           - Features: Has front and rear electric seats, aesthetic interior, height control, lane assist and a panoramic sunroof, 3000cc.
           - Impact:  Provides maximum protection to the passengers and also increases the buyer confidence of the car reliability.
           - Price: Ksh. 7,500,000

        3. Volkswagen golf 2018 grey:
           - About: Urban efficiency
           - Features: Halogen high-beam headlamps, fog lights, turn signal power mirrors, steering controls, and cruise control
           - Impact: Designed for modern city life, this car blends style, control, and fuel efficiency, perfect for practical yet tech-savvy drivers.
           - Price: Ksh. 2,800,000


        CONTACT INFORMATION:
        - Email: kashbel747@gmail.com
        - Phone: +254 795 524 137
        - Instagram: https://www.instagram.com/_benuella/?igsh=ZjMwOWZobGYyYzYx#
        - Location: Thika, Kenya

         Khaled Motors team:
        - Name: Ashbel King'ori
        - Role: Founder, Khaled Motors.
        - Responsibility: Manages vehicle sourcing and sales and maintain customer satisfaction
        
        - Name: Liroy Onkwani
        - Role: Co-founder, Khaled Motors
        - Responsibility: To oversee vehicle inspections, and after-sales support, ensuring all vehicles meet quality standards and customers receive top-tier service.

        When answering questions, be conversational, enthusiastic, and informative. Always respond as if you are representing Khaled Motors. Provide specific details when asked about projects, skills, or experiences. Be proud of your work in generative AI and its impact on technology.
        `;

        // Initialize Puter
        let puterInitialized = false;

        async function initializePuter() {
            if (puterInitialized) return;
            
            try {
                console.log('Initializing Puter...');
                puterInitialized = true;
            } catch (error) {
                console.error('Error initializing Puter:', error);
                puterInitialized = false;
            }
        }

        // Chat functionality
        const chatMessages = document.getElementById('chatMessages');
        const chatInput = document.getElementById('chatInput');
        const sendButton = document.getElementById('sendButton');
        const typingIndicator = document.getElementById('typingIndicator');

        // Initialize Puter when page loads
        window.addEventListener('load', initializePuter);

        function addMessage(content, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
            
            const avatarDiv = document.createElement('div');
            avatarDiv.className = `message-avatar ${isUser ? 'user-avatar' : 'bot-avatar'}`;
            avatarDiv.textContent = isUser ? 'U' : 'AI';
            
            const bubbleDiv = document.createElement('div');
            bubbleDiv.className = 'message-bubble';
            bubbleDiv.textContent = content;
            
            if (isUser) {
                messageDiv.appendChild(bubbleDiv);
                messageDiv.appendChild(avatarDiv);
            } else {
                messageDiv.appendChild(avatarDiv);
                messageDiv.appendChild(bubbleDiv);
            }
            
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function showTypingIndicator() {
            typingIndicator.style.display = 'flex';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function hideTypingIndicator() {
            typingIndicator.style.display = 'none';
        }

        async function sendMessage() {
            const message = chatInput.value.trim();
            if (!message) return;

            // Add user message
            addMessage(message, true);
            chatInput.value = '';
            sendButton.disabled = true;

            // Show typing indicator
            showTypingIndicator();

            try {
                // Initialize Puter if not already done
                await initializePuter();

                // Create the full prompt with context
                const fullPrompt = `${personalContext}\n\nUser question: ${message}\n\nPlease respond as Khaled MOtor's AI assistant, providing helpful and accurate information based on the context above.`;

                // Use Puter AI chat
                const response = await puter.ai.chat(fullPrompt, {
                    model: 'gpt-4',
                    temperature: 0.7,
                    max_tokens: 500
                });

                hideTypingIndicator();
                
                // Add bot response
                if (response && response.message) {
                    addMessage(response.message);
                } else {
                    addMessage("I'm here to help! Ask me about Khaled motor's background, team, vehicles or contact information.");
                }

            } catch (error) {
                console.error('Error sending message:', error);
                hideTypingIndicator();
                
                // Fallback responses based on common questions
                const fallbackResponse = getFallbackResponse(message.toLowerCase());
                addMessage(fallbackResponse);
            }

            sendButton.disabled = false;
        }

        function getFallbackResponse(message) {
            // Simple keyword-based responses
            if (message.includes('founder') || message.includes('startup')) {
                return "Khaled Motors was founded by Ashbel King'ori to provide a marketplace for buying and selling cars.";
            } else if (message.includes('solve')) {
                return "Our company offers a marketplace where on can buy and sell cars in a transparent and seamless way.";
            } else if (message.includes('vision')) {
                return "To create a world where owning a car is easier and transforming dreams into reality.";
            } else if (message.includes('services') || message.includes('products')) {
                return "We sell a variety of vehicles ranging from SUVs to sedan cars. Please explore our vehicles to find the one that matches your needs";
            } else if (message.includes('contact') || message.includes('support')) {
                return "You can reach me at kashbel747@gmail.com, call me at +254 795 524 137, or connect with me on Instagram (https://www.instagram.com/_benuella)";
            } else {
                return "I'm here to help you learn about Khaled Motors background, team, vehicles and contact information. What would you like to know?";
            }
        }

        function askQuestion(question) {
            chatInput.value = question;
            sendMessage();
        }

        // Event listeners
        sendButton.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });