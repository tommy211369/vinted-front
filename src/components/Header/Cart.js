import React from "react";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item">
          <p>Basket Nike</p>
          <p>75 €</p>
        </div>
        <div className="cart-item">
          <p>T-shirt Babou</p>
          <p>3 €</p>
        </div>
      </div>
      <div className="total-cart">
        <p>Total</p>
        <p>78€</p>
      </div>

      <p className="valid-cart">Valider votre panier</p>
    </div>
  );
};

export default Cart;
