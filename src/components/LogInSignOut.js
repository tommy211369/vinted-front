import React from "react";
import { Link } from "react-router-dom";

export default function LogInSignOut({ setModalMenu }) {
  return (
    <li className="login-signup">
      <Link
        to="/login"
        className="connexion"
        onClick={() => {
          setModalMenu(false);
        }}
      >
        Se connecter
      </Link>
      <Link
        to="/signup"
        className="connexion"
        onClick={() => {
          setModalMenu(false);
        }}
      >
        S'inscrire
      </Link>
    </li>
  );
}
