// Navigation Bar Animation 
const menuBar = document.querySelector('.Menu');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        menuBar.classList.add('scrolled');
    } else {
        menuBar.classList.remove('scrolled');
    }
});


//Carousel Animation  
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "work1.png",
        "bts.png",
        "garden.png",
        "elevator.png"
    ];

    let currentIndex = 0;
    const carouselImages = document.querySelectorAll(".Carousel img");

    carouselImages.forEach((image) => {
        image.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % images.length;
            this.src = images[currentIndex];
        });
    });
});
