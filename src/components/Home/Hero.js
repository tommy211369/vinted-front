import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/img/hero.jpeg";
import heroEffect from "../../assets/img/hero-effect.svg";

export default function Hero({ userToken }) {
  return (
    <div className="hero">
      <img src={hero} alt="hero vinted" />
      <img src={heroEffect} alt="hero effect" />
      <div className="placards">
        <h1>Prêts à faire du tri dans vos placards ?</h1>

        {userToken ? (
          <Link to="/sell" className="hero-sell">
            <div>Vends maintenant</div>
          </Link>
        ) : (
          <Link to="/login" className="hero-sell">
            <div>Vends maintenant</div>
          </Link>
        )}

        <p>Découvrir comment ça marche</p>
      </div>
    </div>
  );
}
