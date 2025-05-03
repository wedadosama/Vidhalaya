const cartCount = document.getElementById("cart-count");
let count = 0;

const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count++;
    cartCount.textContent = `Cart (${count})`;
  });
});
