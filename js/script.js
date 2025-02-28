window.addEventListener('DOMContentLoaded', () => {
    // Toggle menu list visibility
    const list = document.querySelector(".list");
    document.getElementById("bar").addEventListener("click", () => {
        list.style.display = list.style.display === "flex" ? "none" : "flex";
    });

    // Select slide info elements
    const currentSlideElement = document.querySelector(".current");
    const totalSlidesElement = document.querySelector(".total");
    const ncurrentSlideElement = document.querySelector(".ncurrent");
    const ntotalSlidesElement = document.querySelector(".ntotal");

    if (!currentSlideElement || !totalSlidesElement) {
        console.error("Slide info elements not found! Please check your HTML.");
        return;
    }

    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.custom-button-next',
            prevEl: '.custom-button-prev',
        },

        // Scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        // Responsive breakpoints
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1100: { slidesPerView: 3, spaceBetween: 30 },
        },

        // Events
        on: {
            init: function () {
                updateSlideInfo(this);
            },
            slideChange: function () {
                updateSlideInfo(this);
            },
        },
    });


    // Function to update slide information
    function updateSlideInfo(swiperInstance) {
        if (!swiperInstance || !swiperInstance.slides) {
            console.error("Swiper instance not ready!");
            return;
        }

        // Update the values
        currentSlideElement.textContent ='0'+( swiperInstance.realIndex + 1); // 1-based index
        totalSlidesElement.textContent ='0'+ swiperInstance.slides.length;  // Total number of slides
        ncurrentSlideElement.textContent ='0'+( swiperInstance.realIndex + 1); // 1-based index
        ntotalSlidesElement.textContent ='0'+ swiperInstance.slides.length;  // Total number of slides
    }
});




