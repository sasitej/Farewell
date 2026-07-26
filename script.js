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

startBtn.addEventListener("click", () => {

    startScreen.classList.add("hidden");

    openingScreen.classList.remove("hidden");

    bgMusic.volume = 1;

    bgMusic.play().catch(() => {});

    setTimeout(() => {

        openingScreen.classList.add("hidden");

        bookCover.classList.remove("hidden");

    }, 20000);

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

        pages.forEach(page => {

            page.classList.remove("active");

        });

        const target = document.getElementById(button.dataset.target);

        if (target) {

            target.classList.add("active");

        }

    });

});