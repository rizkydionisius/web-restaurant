import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

// console.log('Hello Coders! :)');
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".right-section");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".right-section");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Handle resizing of the window
    window.addEventListener("resize", function () {
        adjustHeroImageSize();
    });

    // Adjust hero image size on page load
    adjustHeroImageSize();
});

function adjustHeroImageSize() {
    const heroImage = document.querySelector(".hero img");
    const viewportWidth = window.innerWidth;

    if (viewportWidth >= 1200) {
        heroImage.style.minWidth = "1000px";
    } else {
        heroImage.style.minWidth = "0";
    }
}
