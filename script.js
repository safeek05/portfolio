/* =====================================
   PORTFOLIO JAVASCRIPT
===================================== */


/* ========= TYPING EFFECT ========= */

document.addEventListener("DOMContentLoaded", () => {

    const textArray = [
        "Aspiring Developer 🚀",
        "Web Developer 💻",
        "Problem Solver ⚡",
        "Tech Enthusiast 🤖"
    ];

    let index = 0;
    let charIndex = 0;

    const typingText = document.getElementById("typing-text");

    function typeEffect() {
        if (!typingText) return;

        if (charIndex < textArray[index].length) {
            typingText.textContent += textArray[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 80);
        } else {
            setTimeout(eraseEffect, 1500);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typingText.textContent =
                textArray[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 40);
        } else {
            index = (index + 1) % textArray.length;
            setTimeout(typeEffect, 300);
        }
    }

    typeEffect();
});


/* ========= SCROLL REVEAL ========= */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".hidden")
    .forEach(el => observer.observe(el));


/* ========= ACTIVE NAVBAR LINK ========= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});