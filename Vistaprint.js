const texts = [
    "Buy More, Save More! Flat 5% OFF on Orders ₹10,000+ | Code: SAVE5 | Ends Dec 31",
    "Hurry Up! Limited Time Offer: Free Shipping on Orders Above ₹5,000 | Ends Soon"
  ];

  let currentIndex = 0;

  const sliderText = document.getElementById("sliderText");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    sliderText.textContent = texts[currentIndex];
  });

  next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % texts.length;
    sliderText.textContent = texts[currentIndex];
  });


  const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    const slideWidth = slides[0].getBoundingClientRect().width;

    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    });

    




    const Track = document.querySelector('.carousel-track');
    const Slides = Array.from(track.children);
    const PrevButton = document.querySelector('.prev-btn');
    const NextButton = document.querySelector('.next-btn');

    const SlideWidth = Slides[0].getBoundingClientRect().width;

    Slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    });

    let CurrentIndex = 0;

    const moveToSlide = (Track, CurrentIndex) => {
      Track.style.transform = 'translateX(-' + slideWidth * CurrentIndex + 'px)';
    };

    prevButton.addEventListener('click', () => {
      CurrentIndex = Math.max(0, CurrentIndex - 1);
      moveToSlide(Track, CurrentIndex);
    });

    nextButton.addEventListener('click', () => {
      CurrentIndex = Math.min(Slides.length - 1, CurrentIndex + 1);
      moveToSlide(Track, CurrentIndex);
    });


const carouselContainer = document.querySelector('.carousel1'); 
const carouselTrack = document.querySelector('.carousel-track2'); 
const carouselSlides = Array.from(carouselTrack.children);  
const prevBtnCarousel = document.querySelector('.prev-btn1'); 
const nextBtnCarousel = document.querySelector('.next-btn1'); 

const carouselSlideWidth = carouselSlides[0].getBoundingClientRect().width; 

carouselSlides.forEach((slide, index) => {
  slide.style.left = carouselSlideWidth * index + 'px';
});

let currentCarouselIndex = 0; 

const moveToCarouselSlide = (track, targetIndex) => {
  track.style.transform = 'translateX(-' + carouselSlideWidth * targetIndex + 'px)';
};

prevBtnCarousel.addEventListener('click', () => {
  currentCarouselIndex = Math.max(0, currentCarouselIndex - 1);
  moveToCarouselSlide(carouselTrack, currentCarouselIndex);
});

nextBtnCarousel.addEventListener('click', () => {
  currentCarouselIndex = Math.min(carouselSlides.length - 1, currentCarouselIndex + 1);
  moveToCarouselSlide(carouselTrack, currentCarouselIndex);
});





const carouselTrackNew = document.querySelector('.carousel-track3'); 
const carouselSlidesNew = Array.from(carouselTrackNew.children); 
const prevBtnUpdated = document.querySelector('.prev-btn2'); 
const nextBtnUpdated = document.querySelector('.next-btn2'); 

const singleSlideWidth = carouselSlidesNew[0].getBoundingClientRect().width; 

carouselSlidesNew.forEach((slide, index) => {
  slide.style.left = singleSlideWidth * index + 'px';
});

let activeSlideIndex = 0; 

const shiftToSlide = (trackElement, targetIndex) => { 
  trackElement.style.transform = 'translateX(-' + singleSlideWidth * targetIndex + 'px)';
};

prevBtnUpdated.addEventListener('click', () => {
  activeSlideIndex = Math.max(0, activeSlideIndex - 1);
  shiftToSlide(carouselTrackNew, activeSlideIndex);
});

nextBtnUpdated.addEventListener('click', () => {
  activeSlideIndex = Math.min(carouselSlidesNew.length - 1, activeSlideIndex + 1);
  shiftToSlide(carouselTrackNew, activeSlideIndex);
});

const a = document.querySelector('.carousel1'); 
const b = document.querySelector('.carousel-track4'); 
const c = Array.from(b.children); 
const d = document.querySelector('.prev-btn3'); 
const e = document.querySelector('.next-btn3'); 

const f = c[0].getBoundingClientRect().width; 

c.forEach((slide, i) => {
  slide.style.left = f * i + 'px';
});

let g = 0; 

const h = (index) => {
  b.style.transform = 'translateX(-' + f * index + 'px)';
};

d.addEventListener('click', () => {
  if (g > 0) {
    g -= 1; 
    h(g);
  }
});


e.addEventListener('click', () => {
  if (g < c.length - 1) {
    g += 1; 
    h(g);
  }
});



const a1 = document.querySelector('.carousel1'); 
const b1 = document.querySelector('.carousel-track5'); 
const c1 = Array.from(b1.children); 
const d1 = document.querySelector('.prev-btn4'); 
const e1 = document.querySelector('.next-btn4'); 

const f1 = c1[0].getBoundingClientRect().width; 

c1.forEach((slide, i1) => {
  slide.style.left = f1 * i1 + 'px';
});

let g1 = 0; 

const h1 = (index1) => {
  b1.style.transform = 'translateX(-' + f1 * index1 + 'px)';
};

d1.addEventListener('click', () => {
  if (g1 > 0) {
    g1 -= 1; 
    h1(g1);
  }
});

e1.addEventListener('click', () => {
  if (g1 < c1.length - 1) {
    g1 += 1; 
    h1(g1);
  }
});


const a2 = document.querySelector('.carousel1'); 
const b2 = document.querySelector('.carousel-track6'); 
const c2 = Array.from(b2.children); 
const d2 = document.querySelector('.prev-btn5'); 
const e2 = document.querySelector('.next-btn5'); 

const f2 = c2[0].getBoundingClientRect().width; 

c2.forEach((slide, i2) => {
  slide.style.left = f2 * i2 + 'px';
});

let g2 = 0; 

const h2 = (index2) => {
  b2.style.transform = 'translateX(-' + f2 * index2 + 'px)';
};

d2.addEventListener('click', () => {
  if (g2 > 0) {
    g2 -= 1; 
    h2(g2);
  }
});

e2.addEventListener('click', () => {
  if (g2 < c2.length - 1) {
    g2 += 1; 
    h2(g2);
  }
});
