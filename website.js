const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const slides = sliderContainer.children;
const slideWidth = slides[0].getBoundingClientRect().width;

let slideIndex = 0;

function setPosition() {
  sliderContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function resizeImages() {
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const slideWidth = slide.getBoundingClientRect().width;
    const image = slide.querySelector('img');
    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;
    const aspectRatio = imageWidth / imageHeight;
    image.style.width = `${slideWidth}px`;
    image.style.height = `${slideWidth / aspectRatio}px`;
  }
}

window.addEventListener('resize', resizeImages);

prevBtn.addEventListener('click', () => {
  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  setPosition();
});

nextBtn.addEventListener('click', () => {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  setPosition();
});

resizeImages();
setPosition();
