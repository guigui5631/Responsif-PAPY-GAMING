document.addEventListener("DOMContentLoaded", () => {
    // --- Animation au scroll ---
    const revealElements = document.querySelectorAll(".scroll-reveal");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    revealElements.forEach(el => { observer.observe(el); });

    // --- Pause carousel reviews on click ---
    const reviewsCarousel = document.getElementById('reviews-carousel-container');
    if (reviewsCarousel) {
        let pauseTimer = null;
        reviewsCarousel.addEventListener('click', () => {
            clearTimeout(pauseTimer);
            reviewsCarousel.classList.add('is-paused');
            pauseTimer = setTimeout(() => {
                reviewsCarousel.classList.remove('is-paused');
            }, 120000);
        });
    }
});