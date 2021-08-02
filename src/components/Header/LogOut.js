import React from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

export default function LogOut({ setUserToken, dataUsername }) {
  const history = useHistory();

  // log out
  const handleDeleteToken = () => {
    Cookies.remove("userToken");
    setUserToken(null);
    history.push("/");
  };
  return (
    <li onClick={handleDeleteToken} className="logout">
      Se déconnecter
    </li>
  );
}
