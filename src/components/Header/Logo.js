import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-vinted.png";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo vinted" />
    </Link>
  );
}
