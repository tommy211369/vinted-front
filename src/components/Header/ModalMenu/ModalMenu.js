import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModalMenu.css";

import LogOut from "../LogOut/LogOut";
import LogInSignOut from "../LogInSignUp/LogInSignUp";

export default function ModalMenu({
  setModalMenu,
  userToken,
  setUserToken,
  dataUsername,
  setDataUsername,
  displaySearch,
  displayCart,
  setDisplayCart,
  cart,
  setCart,
}) {
  return (
    <ul className={displaySearch ? "modal-menu" : "modal-menu-nosearch"}>
      {userToken ? (
        <LogOut
          setUserToken={setUserToken}
          dataUsername={dataUsername}
          setDataUsername={setDataUsername}
          setDisplayCart={setDisplayCart}
          setCart={setCart}
          cart={cart}
        />
      ) : (
        <LogInSignOut setModalMenu={setModalMenu} />
      )}

      {userToken === null ? (
        <Link
          to="/login"
          className="sell-now"
          onClick={() => {
            setModalMenu(false);
          }}
        >
          Vends maintenant
        </Link>
      ) : (
        <Link
          to="/publish"
          className="sell-now"
          onClick={() => {
            setDisplayCart(false);
            setModalMenu(false);
          }}
        >
          Vends maintenant
        </Link>
      )}

      {userToken && (
        <FontAwesomeIcon
          icon="shopping-cart"
          className="cart-icon"
          onClick={() => {
            setDisplayCart(!displayCart);
            setModalMenu(false);
          }}
        />
      )}

      <FontAwesomeIcon
        icon="times-circle"
        onClick={() => {
          setModalMenu(false);
        }}
        className="close-menu-modal"
      />
    </ul>
  );
}
