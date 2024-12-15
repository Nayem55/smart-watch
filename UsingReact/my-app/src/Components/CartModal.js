import React from "react";

const CartModal = ({ cart, onClearCart, onClose }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
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
                    <td>${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Total Price: ${totalPrice}</h3>
            <button className="clear-cart" onClick={onClearCart}>
              Clear Cart
            </button>
            <button className="checkout" onClick={onClose}>
              Checkout
            </button>
          </>
        )}
        <button className="close-modal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
