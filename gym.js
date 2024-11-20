const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")

})

menuCloseButton.addEventListener("click", () => menuOpenButton.click());
// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

// Function to open YouTube video in a new tab
function openYouTubeVideo() {
    window.open("https://www.youtube.com/embed/YOUR_VIDEO_ID", "_blank");
}

// Event listener for the YouTube video button
document.querySelector(".button").addEventListener("click", openYouTubeVideo);

