// ==============================
// ELEMENTS
// ==============================

const passwordScreen = document.getElementById("passwordScreen");
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("errorMessage");

const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const openingScreen = document.getElementById("openingScreen");
const bookCover = document.getElementById("bookCover");
const book = document.querySelector(".book");
const music = document.getElementById("bgMusic");

// ==============================
// PASSWORD
// ==============================

const PASSWORD = "journey";   // Change this to any password you like

unlockBtn.addEventListener("click", () => {

    if (passwordInput.value === PASSWORD) {

        passwordScreen.style.display = "none";
        errorMessage.textContent = "";

    } else {

        errorMessage.textContent = "Incorrect password";

    }

});

// Optional: Press Enter to unlock
passwordInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        unlockBtn.click();
    }

});

// ==============================
// START JOURNEY
// ==============================

startBtn.addEventListener("click", () => {

    music.volume = 1;
    music.play();

    startScreen.style.display = "none";
    openingScreen.style.display = "block";

    setTimeout(() => {

        openingScreen.style.display = "none";

        bookCover.style.display = "flex";

        setTimeout(() => {

            book.classList.add("show");

            // Fade out music
            setTimeout(() => {

                let fadeMusic = setInterval(() => {

                    if (music.volume > 0.05) {

                        music.volume -= 0.05;

                    } else {

                        music.volume = 0;
                        music.pause();

                        clearInterval(fadeMusic);

                    }

                }, 100);

            }, 2000);

        }, 200);

    }, 20000);

});