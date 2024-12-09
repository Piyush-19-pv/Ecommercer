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


// Get elements
const visitingCardBtn = document.getElementById("visitingCardBtn");
const visitingCardDropdown = document.getElementById("visitingCardDropdown");

// Open dropdown
visitingCardBtn.addEventListener("click", () => {
    visitingCardDropdown.classList.toggle("hidden");
});

// Close dropdown when clicking outside
window.addEventListener("click", (e) => {
    if (!visitingCardDropdown.contains(e.target) && e.target !== visitingCardBtn) {
        visitingCardDropdown.classList.add("hidden");
    }
});



// Get elements
const stationeryBtn = document.getElementById('stationery-btn');
const stationeryContent = document.getElementById('stationery-content');

// Event Listener for the Button
stationeryBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent link from navigating
    stationeryContent.classList.toggle('visible'); // Toggle visibility
});
