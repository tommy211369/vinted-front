import React from "react";
import hero from "../assets/img/hero.jpeg";
import heroEffect from "../assets/img/hero-effect.svg";

export default function Hero() {
  return (
    <div className="hero">
      <img src={hero} alt="hero vinted" />
      <img src={heroEffect} alt="hero effect" />
    </div>
  );
}
