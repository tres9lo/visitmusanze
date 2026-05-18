// Simple slider logic for the homepage hero section.
// Uses indicators to show the active slide and advances automatically.
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const indicators = Array.from(document.querySelectorAll('.indicator'));
    if (!slides || indicators.length === 0) return;
    let currentSlide = 0;

    function updateSlider() {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        indicators.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % indicators.length;
        updateSlider();
    }

    // Auto-advance every 5 seconds.
    setInterval(nextSlide, 5000);

    // Allow users to click indicators to switch slides.
    indicators.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
});