import React from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

export default function LogOut({
  setUserToken,
  setDataUsername,
  setDisplayCart,
  setCart,
}) {
  const history = useHistory();

  return (
    <li
      onClick={() => {
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
