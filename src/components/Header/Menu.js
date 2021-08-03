import React from "react";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import LogInSignOut from "./LogInSignUp";
import Languages from "./Languages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu({
  userToken,
  setModalMenu,
  setUserToken,
  dataUsername,
  displayCart,
  setDisplayCart,
}) {
  return (
    <ul>
      {userToken ? (
        <LogOut
          setUserToken={setUserToken}
          dataUsername={dataUsername}
          setDisplayCart={setDisplayCart}
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

      <li className="languages">
        <Languages />
      </li>
    </ul>
  );
}
