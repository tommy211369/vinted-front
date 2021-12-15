import React from "react";
import { Link } from "react-router-dom";
import "./Offer.css";

export default function Offer({ offer }) {
  return (
    <div className="offer">
      <Link to={`/offer/${offer._id}`} key={offer._id}>
        <img src={offer.product_image.url} alt={offer.product_name} />
      </Link>
      <div>
        <p className="price">{offer.product_price} €</p>
        <p>Taille : {offer.product_details[1].TAILLE}</p>
        <p>{offer.product_details[0].MARQUE}</p>{" "}
      </div>
    </div>
  );
}
