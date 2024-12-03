document.querySelector('.view-all-btn').addEventListener('click', () => {
    const dropdown = document.getElementById('viewAllDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  




  document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease-in-out ${(index * 0.1)}s`;
        card.style.animationFillMode = 'forwards';
    });
});




// Button click functionality
// Button click events
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", (e) => {
      const buttonText = e.target.textContent;
      if (buttonText === "Shop Now") {
          window.location.href = "/shop"; // Replace with actual shop URL
      } else if (buttonText === "Photo Albums") {
          window.location.href = "/photo-albums"; // Replace with actual albums URL
      } else if (buttonText === "Layflat Photo Albums") {
          window.location.href = "/layflat-photo-albums"; // Replace with actual layflat URL
      }
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const socialIcons = document.querySelectorAll(".social-icons img");
  socialIcons.forEach(icon => {
    icon.addEventListener("mouseover", () => {
      icon.style.filter = "brightness(1.2)";
    });
    icon.addEventListener("mouseout", () => {
      icon.style.filter = "brightness(1)";
    });
  });
});


