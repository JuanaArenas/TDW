document.addEventListener("DOMContentLoaded", () => {
    const carouselInner = document.querySelector(".carousel-inner");
    const totalSlides = document.querySelectorAll(".carousel-item").length;
    let currentIndex = 0;

    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    // Function to show the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    // Function to show the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Event listeners for the navigation buttons
    if (nextButton) {
        nextButton.addEventListener("click", nextSlide);
    }
    if (prevButton) {
        prevButton.addEventListener("click", prevSlide);
    }

    // Automatic slide change every 3 seconds
    setInterval(nextSlide, 3000);
});