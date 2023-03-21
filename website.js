const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
let currentImageIndex = 0;

setInterval(() => {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}, 5000);
