import React from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

export default function LogOut({
  setUserToken,
  setDataUsername,
  setDisplayCart,
  setCart,
  cart,
}) {
  const history = useHistory();

  return (
    <li
      onClick={() => {
        const newCart = [...cart];
        newCart.splice(0, newCart.length);
        setCart(newCart);
        setDisplayCart(false);
        Cookies.remove("userToken");
        setUserToken(null);
        setDataUsername(null);
        history.push("/");
      }}
      className="logout"
    >
      Se déconnecter
    </li>
  );
}
