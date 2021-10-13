import React from "react";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import LogInSignOut from "./LogInSignUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu({
  userToken,
  setModalMenu,
  setUserToken,
  dataUsername,
  setDataUsername,
  displayCart,
  setDisplayCart,
  cart,
  setCart,
}) {
  return (
    <ul>
      {userToken ? (
        <LogOut
          setUserToken={setUserToken}
          setDataUsername={setDataUsername}
          setDisplayCart={setDisplayCart}
          setCart={setCart}
          cart={cart}
        />
      ) : (
        <LogInSignOut setModalMenu={setModalMenu} />
      )}

      {userToken === null ? (
        <Link to="/login" className="sell-now">
          Vends maintenant
        </Link>
      ) : (
        <Link to="/publish" className="sell-now">
          Vends maintenant
        </Link>
      )}

      {userToken && (
        <FontAwesomeIcon
          icon="shopping-cart"
          className="cart-icon"
          onClick={() => {
            setDisplayCart(!displayCart);
          }}
        />
      )}
    </ul>
  );
}
