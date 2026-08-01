// ===============================
// CONFIG
// ===============================

const PASSWORD = "pooja"

// ===============================
// ELEMENTS
// ===============================

const passwordScreen = document.getElementById("passwordScreen");
const startScreen = document.getElementById("startScreen");
const openingScreen = document.getElementById("openingScreen");
const bookCover = document.getElementById("bookCover");
const book = document.getElementById("book");

const unlockBtn = document.getElementById("unlockBtn");
const startBtn = document.getElementById("startBtn");
const openBookBtn = document.getElementById("openBookBtn");

const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("errorMessage");

const bgMusic = document.getElementById("bgMusic");
const introText = document.getElementById("introText");

// ===============================
// INITIAL STATE
// ===============================

startScreen.classList.add("hidden");
openingScreen.classList.add("hidden");
bookCover.classList.add("hidden");
book.classList.add("hidden");

// ===============================
// PASSWORD
// ===============================

unlockBtn.addEventListener("click", () => {

    if (passwordInput.value.trim() === PASSWORD) {

        passwordScreen.classList.add("hidden");
        startScreen.classList.remove("hidden");

    } else {

        errorMessage.textContent = "Incorrect Password";

    }

});

// Press Enter to Unlock

passwordInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        unlockBtn.click();
    }

});

// ===============================
// START JOURNEY
// ===============================

const introLines = [

    "Every journey introduces us to many people...",

    "Only a precious few leave behind memories,<br>lessons and a lasting impact.",

    "You are one of them.",

    "This isn't just a farewell...<br>It's the story of the difference you made in all of us."

];

startBtn.addEventListener("click", () => {

    startScreen.classList.add("hidden");

    openingScreen.classList.remove("hidden");

    bgMusic.volume = 1;

    bgMusic.play().catch(() => {});

    let index = 0;

    function showNextLine(){

        if(index >= introLines.length){

            openingScreen.classList.add("hidden");

            bookCover.classList.remove("hidden");

            return;

        }

        introText.style.opacity = "0";

        introText.style.transform = "translateY(30px)";

        setTimeout(()=>{

            introText.innerHTML = introLines[index];

            introText.style.opacity = "1";

            introText.style.transform = "translateY(0)";

            index++;

            setTimeout(()=>{

                introText.style.opacity = "0";

                introText.style.transform = "translateY(-20px)";

                setTimeout(showNextLine,1200);

            },2800);

        },300);

    }
    showNextLine();

});

// ===============================
// OPEN BOOK
// ===============================

openBookBtn.addEventListener("click", () => {

    bookCover.classList.add("hidden");

    book.classList.remove("hidden");

    fadeMusic();

});

// ===============================
// FADE MUSIC
// ===============================

function fadeMusic() {

    let volume = bgMusic.volume;

    const interval = setInterval(() => {

        volume -= 0.05;

        if (volume <= 0) {

            bgMusic.pause();
            bgMusic.currentTime = 0;

            clearInterval(interval);

        } else {

            bgMusic.volume = volume;

        }

    }, 200);

}

// ===============================
// SCRAPBOOK NAVIGATION
// ===============================

const pages = document.querySelectorAll(".spread");

const navButtons = document.querySelectorAll(".scrap-nav button");

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const current = document.querySelector(".spread.active");
        const next = document.getElementById(button.dataset.target);

        if (!next || current === next) return;

        /* Start leaving animation */

        current.classList.add("leaving");

        setTimeout(() => {

            current.classList.remove("active");
            current.classList.remove("leaving");

            next.classList.add("active");
            next.classList.add("entering");

            requestAnimationFrame(() => {

                next.style.opacity = "1";
                next.style.transform = "scale(1) rotate(0deg)";

            });

            setTimeout(() => {

                next.classList.remove("entering");

                next.style.opacity = "";
                next.style.transform = "";

            },650);

        },650);

    });

});