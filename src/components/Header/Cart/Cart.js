import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";

const Cart = ({
  cart,
  totalCart,
  setDisplayCart,
  removeFromCart,
  dataUsername,
}) => {
  const history = useHistory();
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
            <p>{totalCart} €</p>
          </div>

          <p
            className="valid-cart"
            onClick={() => {
              setDisplayCart(false);
              history.push("/payment", {
                amount: totalCart,
                buyer: dataUsername,
              });
            }}
          >
            Valider votre panier
          </p>
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
