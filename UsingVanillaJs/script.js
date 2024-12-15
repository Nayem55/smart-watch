const productData = {
  colors: {
    purple: {
      image: "https://s3-alpha-sig.figma.com/img/2976/f5db/6ba4ac91a82300df8837e8cb1806acad?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JWohOss7IT3sFIlcvK51H8ZzbWybTA1iKcSGv~PA8-U~YPU~RkdcI2HWobSAmm-Fg~yuq2QqUZ0zJk29p92tuZjXd~eEq1QhvjnmcCbZDI3OJll-d5QdTF8Eh0rLZ84QPh1tUHhHHTjMmd7kipU4vXQmNeYMXIkdA5bvJb8Va2WMHSNrL-yNgpc3I0H~g4uovmHKYDsGEY~HVdxnW8kFTZVTb4lO1teRyTNrVVPZZzb7kpBRmhcdJTw~Lprkb3zUQllVs06trpyGIm8LzxsVH2CYSo7qvvvyLCmlDS2co5UM~XDu3TMvatS3lAObPy4bHd~-m1jagpGa6HUttU~mng__",
    },
    cyan: {
      image: "https://s3-alpha-sig.figma.com/img/6deb/aec5/7b31ff45e6637788a867ee502091ceb4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cx9gaEVxLOzbH8MPjqSgqbeLTzD10cF2vK~WtZCk0M8Ls3V03qnMXDFeJH9f2k~n5pw-~TNDNxOCps5K6YIgZL~3f0bc~oUYuxWW3AjSpgf1ywAvAUcT-GpULe-MP5iADnA4ZOb2Af9msHKrm5Y0Fkx-gRzGTzbuc6ctxi9x34~OL4qNTWWzEjLfaaSbiAM~BOaYfHUn-GP2G0wv7HUhXk4Zc4~ma-QbOmED0du1MPP-RxgKmGSOrFFbWHINXQt3ngP62nHKstxDaB66irElRD88VLpVHR8UnEu5bj2Y66WLTs2I8g5DesnfI1leliW5Qv89ld9WjfWx4AKMrW0P8w__",
    },
    black: {
      image: "https://s3-alpha-sig.figma.com/img/d17c/d227/ce1aac2c313a4e6414267a1d234a44a5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V7Tw7VHeGopgXxDqmD177wVYlnKVBwiqzFRmGr6hvbe-dwGzY4cFIhjO5pO4eq3-ZmwcTsiO42iMAvwVWvwt4-2YIrG3sYBhDrTosY8jp-v4Aoy2CCX70ALxkLFBPR4YKZ2KkEJmELP5I6ZIS6-4Ig4OlniHJ1AcEj50xnd60vU-Nx4qeplTAHUHSgNuu86VND39TNY~GqbqdyApfqV7i9GgavyFU-s1I9Eh~ChfU9499ZnsFC4oxugvGXDPN-himDm9MGeiJjQ1V47he9nrt00Hwre10pbIgplVRw26XJq9apE-hqVIvhwiejLb9iu6pbIpBa9gl5bG~TNOdNua2g__",
    },
  },
  sizes: {
    S: 69,
    M: 79, // Default price
    L: 89,
    XL: 99,
  },
};

let currentColor = "purple";
let currentSize = "M";
let quantity = 1;
let cart = [];

// DOM Elements
const mainImage = document.getElementById("main-image");
const priceElement = document.querySelector(".price span");
const sizeButtons = document.querySelectorAll(".size");
const colorButtons = document.querySelectorAll(".color");
const quantityElement = document.getElementById("quantity");
const cartCountElement = document.getElementById("cart-count");
const cartItemsElement = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

// Color Selection
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    colorButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentColor = button.dataset.color;
    mainImage.src = productData.colors[currentColor].image;
  });
});

// Size Selection
sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sizeButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentSize = button.dataset.size;
    updatePrice();
  });
});

// Quantity Management
document.getElementById("increase").addEventListener("click", () => {
  quantity++;
  updateQuantity();
});
document.getElementById("decrease").addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    updateQuantity();
  }
});

// Update Price
function updatePrice() {
  const price = productData.sizes[currentSize];
  priceElement.textContent = `$${price * quantity}`;
}

// Update Quantity
function updateQuantity() {
  quantityElement.textContent = quantity;
  updatePrice();
}

// Add to Cart
document.getElementById("add-to-cart").addEventListener("click", () => {
  const item = {
    color: currentColor,
    size: currentSize,
    quantity,
    price: productData.sizes[currentSize] * quantity,
  };
  cart.push(item);
  updateCart();
});

// Open Cart Modal Function
function openCartModal() {
  document.getElementById("cart-modal").classList.remove("hidden");
}

// Update Cart
function updateCart() {
  cartCountElement.textContent = cart.length;
  cartItemsElement.innerHTML = "";
  let totalQuantity = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price;

    cartItemsElement.innerHTML += `
      <tr>
        <td>Smart Watch</td>
        <td>${item.color}</td>
        <td>${item.size}</td>
        <td>${item.quantity}</td>
        <td>$${item.price}</td>
      </tr>
    `;
  });

  document.getElementById("total-quantity").textContent = totalQuantity;
  document.getElementById("total-price").textContent = `$${totalPrice}`;
  document.getElementById("checkout-button").classList.remove("hidden");
}

// Update Cart
document.getElementById("clear-cart").addEventListener("click", () => {
  // Clear cart array and update UI
  cart = [];
  updateCart();
  alert("Cart has been cleared!");
});

// Checkout Button Opens Modal
document.getElementById("checkout-button").addEventListener("click", () => {
  openCartModal(); // Opens the modal when clicking Checkout
});

// Modal Buttons
document.getElementById("continue-shopping").addEventListener("click", () => {
  document.getElementById("cart-modal").classList.add("hidden");
});
document.getElementById("checkout").addEventListener("click", () => {
  document.getElementById("cart-modal").classList.add("hidden");
  alert("Proceeding to checkout...");
});
