import React from "react";
import OfferInfos from "./OfferInfos";
import UserInfos from "./UserInfos";

export default function OfferDetails({ data, cart, setCart }) {
  // fonction qui ajoute l'article au panier
  return (
    <div className="offerDetails">
      <div className="content">
        <img src={data.product_image.secure_url} alt={data.product_name} />
        <div className="details">
          <p>{data.product_price} €</p>

          <OfferInfos data={data} />
          <UserInfos data={data} />

          <div className="buy">Ajouter au panier</div>
        </div>
      </div>
    </div>
  );
}
