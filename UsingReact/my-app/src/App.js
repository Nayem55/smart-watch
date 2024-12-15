import React, { useState } from "react";
import "./App.css";
// Product data
const productData = {
  colors: {
    purple: {
      image:
        "https://s3-alpha-sig.figma.com/img/2976/f5db/6ba4ac91a82300df8837e8cb1806acad?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JWohOss7IT3sFIlcvK51H8ZzbWybTA1iKcSGv~PA8-U~YPU~RkdcI2HWobSAmm-Fg~yuq2QqUZ0zJk29p92tuZjXd~eEq1QhvjnmcCbZDI3OJll-d5QdTF8Eh0rLZ84QPh1tUHhHHTjMmd7kipU4vXQmNeYMXIkdA5bvJb8Va2WMHSNrL-yNgpc3I0H~g4uovmHKYDsGEY~HVdxnW8kFTZVTb4lO1teRyTNrVVPZZzb7kpBRmhcdJTw~Lprkb3zUQllVs06trpyGIm8LzxsVH2CYSo7qvvvyLCmlDS2co5UM~XDu3TMvatS3lAObPy4bHd~-m1jagpGa6HUttU~mng__",
    },
    cyan: {
      image:
        "https://s3-alpha-sig.figma.com/img/6deb/aec5/7b31ff45e6637788a867ee502091ceb4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cx9gaEVxLOzbH8MPjqSgqbeLTzD10cF2vK~WtZCk0M8Ls3V03qnMXDFeJH9f2k~n5pw-~TNDNxOCps5K6YIgZL~3f0bc~oUYuxWW3AjSpgf1ywAvAUcT-GpULe-MP5iADnA4ZOb2Af9msHKrm5Y0Fkx-gRzGTzbuc6ctxi9x34~OL4qNTWWzEjLfaaSbiAM~BOaYfHUn-GP2G0wv7HUhXk4Zc4~ma-QbOmED0du1MPP-RxgKmGSOrFFbWHINXQt3ngP62nHKstxDaB66irElRD88VLpVHR8UnEu5bj2Y66WLTs2I8g5DesnfI1leliW5Qv89ld9WjfWx4AKMrW0P8w__",
    },
    black: {
      image:
        "https://s3-alpha-sig.figma.com/img/d17c/d227/ce1aac2c313a4e6414267a1d234a44a5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V7Tw7VHeGopgXxDqmD177wVYlnKVBwiqzFRmGr6hvbe-dwGzY4cFIhjO5pO4eq3-ZmwcTsiO42iMAvwVWvwt4-2YIrG3sYBhDrTosY8jp-v4Aoy2CCX70ALxkLFBPR4YKZ2KkEJmELP5I6ZIS6-4Ig4OlniHJ1AcEj50xnd60vU-Nx4qeplTAHUHSgNuu86VND39TNY~GqbqdyApfqV7i9GgavyFU-s1I9Eh~ChfU9499ZnsFC4oxugvGXDPN-himDm9MGeiJjQ1V47he9nrt00Hwre10pbIgplVRw26XJq9apE-hqVIvhwiejLb9iu6pbIpBa9gl5bG~TNOdNua2g__",
    },
  },
  sizes: {
    S: 69,
    M: 79,
    L: 89,
    XL: 99,
  },
};

const App = () => {
  const [currentColor, setCurrentColor] = useState("purple");
  const [currentSize, setCurrentSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Update Price based on selected size and quantity
  const updatePrice = () => {
    return productData.sizes[currentSize] * quantity;
  };

  // Handle Add to Cart
  const addToCart = () => {
    const item = {
      color: currentColor,
      size: currentSize,
      quantity,
      price: updatePrice(),
    };
    setCart([...cart, item]);
  };
  const clearCart = () => {
    setCart([]);
  };

  // Handle quantity change
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Handle cart modal toggle
  const toggleCartModal = () => setIsCartOpen((prev) => !prev);

  // Handle Checkout
  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    setIsCartOpen(false);
    clearCart();
  };
  console.log(cart)

  return (
    <div className="container">
      <div className="product-details">
        <img
          className="product-image"
          src={productData.colors[currentColor].image}
          alt="Product"
          id="main-image"
        />
        <div className="product-info">
          <h1>Classy Modern Smart Watch</h1>
          <div className="rating">
            <span className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <span className="reviews">(2 Reviews)</span>
          </div>
          <p class="price">
            <del>$99.00</del> <span>{`$${updatePrice()}`}</span>
          </p>
          <p class="description">
            I must explain to you how all this mistaken idea of denoun cing ple
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teaching.
          </p>

          {/* Color Selection */}
          <div className="options">
            <h3 style={{ color: "#364A63" }}>Band Color</h3>
            <div className="colors">
              {Object.keys(productData.colors).map((color) => (
                <span
                  key={color}
                  className={`${color} ${
                    currentColor === color ? "active" : ""
                  }`}
                  onClick={() => setCurrentColor(color)}
                  data-color={color}
                ></span>
              ))}
            </div>
          </div>

          {/* <div class="options">
            <h3 style="color: #364A63">Band Color</h3>
            <div class="colors">
              <span
                class="color purple active"
                data-color="purple"
                data-image="assets/watch-purple.png"
              ></span>
              <span
                class="color cyan"
                data-color="cyan"
                data-image="assets/watch-cyan.png"
              ></span>
              <span
                class="color black"
                data-color="black"
                data-image="assets/watch-black.png"
              ></span>
            </div>
          </div> */}

          {/* Size Selection */}
          <div className="options">
            <h3>Wrist Size</h3>
            <div className="sizes">
              {Object.keys(productData.sizes).map((size) => (
                <button
                  key={size}
                  className={size === currentSize ? "active size" : "size"}
                  onClick={() => setCurrentSize(size)}
                  data-size={size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Management */}
          <div class="cart-actions">
            <div class="quantity">
              <button onClick={decreaseQuantity} id="decrease">
                -
              </button>
              <span id="quantity">{quantity}</span>
              <button onClick={increaseQuantity} id="increase">
                +
              </button>
            </div>
            <button onClick={addToCart} id="add-to-cart">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div id="cart-modal" className="cart-modal">
          <div class="modal-header">
            <h2>Your Cart</h2>
            <button onClick={()=>clearCart()} id="clear-cart">Clear Cart</button>
          </div>

          <div id="cart-items">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>Smart Watch</td>
                    <td>{item.color}</td>
                    <td>{item.size}</td>
                    <td>{item.quantity}</td>
                    <td>$ {item.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3">Total</td>
                  <td id="total-quantity">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </td>
                  <td id="total-price">
                    $ {cart.reduce((acc, item) => acc + item.price, 0)}
                  </td>
                </tr>
              </tfoot>
            </table>

            <div class="modal-buttons">
              <button onClick={toggleCartModal} id="continue-shopping">Continue Shopping</button>
              <button onClick={handleCheckout} id="checkout">Checkout</button>
            </div>
          </div>
        </div>
      )}

      {/* Open Cart Button */}
      <div
        onClick={toggleCartModal}
        id="checkout-button"
        className={`checkout-button ${
          cart.length > 0 ? "absolute" : "hidden"
        } `}
      >
        Checkout <span id="cart-count">{cart.length}</span>
      </div>
    </div>
  );
};

export default App;
