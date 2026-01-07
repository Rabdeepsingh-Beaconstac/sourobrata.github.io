let cartCount = 0;
let isInWishlist = false;

const addToCartBtn = document.getElementById("addToCartBtn");
const wishlistBtn = document.getElementById("wishlistBtn");
const quantitySelect = document.getElementById("quantity");
const cartMessage = document.getElementById("cartMessage");
const wishlistMessage = document.getElementById("wishlistMessage");

addToCartBtn.addEventListener("click", () => {
  const quantity = parseInt(quantitySelect.value, 10);

  cartCount += quantity;

  cartMessage.textContent = `Added ${quantity} item(s) to cart. Total items: ${cartCount}`;
});

wishlistBtn.addEventListener("click", () => {
  isInWishlist = !isInWishlist;
  
  if (isInWishlist) {
    wishlistBtn.textContent = "♥ Saved to Wishlist";
    wishlistBtn.classList.add("active");
    wishlistMessage.textContent = "Item added to your wishlist!";
  } else {
    wishlistBtn.textContent = "♡ Save to Wishlist";
    wishlistBtn.classList.remove("active");
    wishlistMessage.textContent = "Item removed from wishlist.";
  }
});
