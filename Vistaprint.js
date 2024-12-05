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