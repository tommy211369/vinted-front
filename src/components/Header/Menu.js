import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import LogInSignOut from "./LogInSignUp";
import Languages from "./Languages";

export default function Menu({
  userToken,
  setModalMenu,
  setUserToken,
  dataUsername,
}) {
  return (
    <ul>
      {userToken ? (
        <LogOut setUserToken={setUserToken} dataUsername={dataUsername} />
      ) : (
        <LogInSignOut setModalMenu={setModalMenu} />
      )}

      {userToken === null ? (
        <Link to="/login" className="sell-now">
          Vends maintenant
        </Link>
      ) : (
        <Link to="/sell" className="sell-now">
          Vends maintenant
        </Link>
      )}

      <li className="languages">
        <Languages />
      </li>
    </ul>
  );
}
