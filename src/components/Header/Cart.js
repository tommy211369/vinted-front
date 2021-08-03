import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart, totalCart, setDisplayCart, removeFromCart }) => {
  return (
    <Fragment>
      {cart.length > 0 ? (
        <div className="cart">
          <FontAwesomeIcon
            icon="times-circle"
            className="times-circle"
            onClick={() => {
              setDisplayCart(false);
            }}
          />
          <div className="cart-items">
            {cart.map((item) => {
              totalCart += item.product_price;
              return (
                <div key={item._id} className="cart-item">
                  <p>{item.product_name}</p>
                  <p>{item.product_price} €</p>
                  <FontAwesomeIcon
                    icon="trash-alt"
                    className="trash"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="total-cart">
            <p>Total</p>
            <p>{totalCart.toFixed(2)} €</p>
          </div>

          <p className="valid-cart">Valider votre panier</p>
        </div>
      ) : (
        <div className="empty-cart">
          <p>Votre panier est vide</p>
          <FontAwesomeIcon
            icon="times-circle"
            className="times-circle"
            onClick={() => {
              setDisplayCart(false);
            }}
          />
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
