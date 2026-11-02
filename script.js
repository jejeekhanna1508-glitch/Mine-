
// ======================================
// SHALU'S SECRET LOVE WORLD ❤️
// ======================================

// CHANGE THIS AFTER PUBLISHING ON GITHUB
const WEBSITE_URL =
    "https://YOUR-USERNAME.github.io/Shalu-Surprise/";

// ANNIVERSARY PASSWORD
const CORRECT_PASSWORD = "22/06/2024";


// ======================================
// GET HTML ELEMENTS
// ======================================

const lockScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("mainContent");

const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");

const errorMessage = document.getElementById("errorMessage");

const hugButton = document.getElementById("hugButton");
const hugText = document.getElementById("hugText");


// ======================================
// BACKGROUND STARS
// ======================================

function createStars() {

    const stars = document.getElementById("stars");

    for (let i = 0; i < 65; i++) {

        const star = document.createElement("span");

        star.className = "star";
        star.textContent = "✦";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.fontSize =
            (8 + Math.random() * 13) + "px";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        stars.appendChild(star);
    }
}

createStars();


// ======================================
// PASSWORD VERIFICATION
// ======================================

passwordForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const enteredPassword = passwordInput.value;

    if (enteredPassword === CORRECT_PASSWORD) {

        errorMessage.textContent = "";

        lockScreen.classList.add("hidden");

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createHearts();

    } else {

        errorMessage.textContent =
            "That's not our special date, my love. Try again! ❤️";

        passwordInput.value = "";

        passwordInput.focus();
    }
});


// ======================================
// FLOATING HEARTS
// ======================================

function createHearts() {

    const heartEmojis = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "✨"
    ];

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.textContent =
            heartEmojis[
                Math.floor(Math.random() * heartEmojis.length)
            ];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-35px";

        heart.style.fontSize = "23px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "50";

        const duration = 3 + Math.random() * 4;

        heart.style.animation =
            `riseHeart ${duration}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, duration * 1000);
    }
}


// ======================================
// VIRTUAL HUG BUTTON
// ======================================

hugButton.addEventListener("click", function() {

    hugText.textContent =
        "🤗 Sending my biggest warm hug to you, Shalu! ❤️ I hope I can make you smile again.";

    hugButton.textContent =
        "One More Hug, Please! 💗";

    createHearts();
});


// ======================================
// QR CODE GENERATION
// ======================================

const qrContainer = document.getElementById("qrcode");

if (typeof QRCode !== "undefined") {

    new QRCode(qrContainer, {

        text: WEBSITE_URL,

        width: 160,

        height: 160,

        colorDark: "#bd367b",

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H

    });

} else {

    qrContainer.textContent =
        "QR library unavailable. Please check your internet.";
}


// ======================================
// FLOATING HEART ANIMATION
// ======================================

const animationStyle = document.createElement("style");

animationStyle.textContent = `

@keyframes riseHeart {

    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }

    100% {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }

}

`;

document.head.appendChild(animationStyle);


// ======================================
// END OF SHALU'S LOVE WEBSITE ❤️
// ======================================
