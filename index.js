const paragraph = document.querySelector("#stair-paragraph");

function handleScroll() {
    const paragraphTop = paragraph.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (paragraphTop < windowHeight * 0.8) {
        paragraph.style.opacity = "1";
        paragraph.style.transform = "translateY(0)";
    }
}

document.addEventListener("scroll", handleScroll);
handleScroll();