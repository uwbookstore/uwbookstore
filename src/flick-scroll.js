const carouselTrack = document.querySelector('.featured__container');
const carouselItems = document.querySelectorAll('.featured__item');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

const itemWidth = carouselItems[0].offsetWidth; // Get width of a single item
let currentIndex = 0;

// Function to move the carousel
function moveCarousel() {
  carouselTrack.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}
console.log(carouselItems.length);
// Event listeners for navigation buttons
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= carouselItems.length / 2) {
    // Check if we've reached the duplicated section
    carouselTrack.style.transition = 'none'; // Disable transition for instant jump
    currentIndex = 0; // Reset index to the start of the original items
    moveCarousel();
    setTimeout(() => {
      carouselTrack.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
    }, 50); // Small delay to allow the instant jump to render
  }
  moveCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    // Check if we've gone before the original start
    carouselTrack.style.transition = 'none'; // Disable transition for instant jump
    currentIndex = carouselItems.length / 2 - 1; // Set index to the end of the duplicated section
    moveCarousel();
    setTimeout(() => {
      carouselTrack.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
    }, 50);
  }
  moveCarousel();
});

// Initial position
moveCarousel();
