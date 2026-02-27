
let cart = [];


const addToCartButtons = document.querySelectorAll(".buy-btn");


const cartCount = document.getElementById("cart-count");

// Add event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener("click", function () {

    // Get product data
    const productName = this.dataset.name;
    const productPrice = this.dataset.price;

    // Create product object
    const product = {
      name: productName,
      price: productPrice
    };

    // Add to cart
    cart.push(product);

    // Update cart UI
    updateCart();

    alert(productName + " added to cart!");
  });
});

// Update Cart Count
function updateCart() {
  cartCount.textContent = cart.length;
}