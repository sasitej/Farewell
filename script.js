// ==============================
// ELEMENTS
// ==============================

const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const openingScreen = document.getElementById("openingScreen");
const bookCover = document.getElementById("bookCover");
const book = document.querySelector(".book");
const music = document.getElementById("bgMusic");

// ==============================
// START JOURNEY
// ==============================

startBtn.addEventListener("click", () => {

    // Start background music
    music.volume = 1;
    music.play();

    // Hide headphone screen
    startScreen.style.display = "none";

    // Show intro screen
    openingScreen.style.display = "block";

    // After intro finishes (20 seconds)
    setTimeout(() => {

        // Hide intro
        openingScreen.style.display = "none";

        // Show scrapbook cover
        bookCover.style.display = "flex";

        // Small delay for smooth appearance
        setTimeout(() => {

            book.classList.add("show");

            // Wait 2 seconds, then slowly fade out the music
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