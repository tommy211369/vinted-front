import React from "react";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import LogInSignOut from "./LogInSignUp";
import Languages from "./Languages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalMenu({
  setModalMenu,
  userToken,
  setUserToken,
  dataUsername,
  displaySearch,
  displayCart,
  setDisplayCart,
}) {
  return (
    <ul className={displaySearch ? "modal-menu" : "modal-menu-nosearch"}>
      {userToken ? (
        <LogOut setUserToken={setUserToken} dataUsername={dataUsername} />
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

      <li className="languages">
        <Languages />
      </li>
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
