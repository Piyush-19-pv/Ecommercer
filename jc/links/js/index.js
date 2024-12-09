// Elements
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.getElementById('close-btn');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalPriceSpan = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');

let cartItems = [];
let totalPrice = 0;

// Show Cart Modal
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

// Close Cart Modal
closeBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Add Item to Cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-product');
        const productPrice = parseFloat(e.target.getAttribute('data-price'));

        // Add to cart array
        cartItems.push({ productName, productPrice });
        totalPrice += productPrice;

        // Update cart UI
        updateCart();
    });
});

// Update Cart Display
function updateCart() {
    // Clear existing cart items
    cartItemsList.innerHTML = '';

    // Add each item to the cart
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - $${item.productPrice.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });

    // Update total price
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Proceed to Checkout
checkoutBtn.addEventListener('click', () => {
    alert('Proceeding to checkout!');
    // Add your checkout logic here
});
