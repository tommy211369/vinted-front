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
        setUserToken(null);
        setDataUsername(null);
        Cookies.remove("userToken");
        Cookies.remove("username");
        history.push("/");
      }}
      className="logout"
    >
      Se déconnecter
    </li>
  );
}
