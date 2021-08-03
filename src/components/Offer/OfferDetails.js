import React from "react";
import OfferInfos from "./OfferInfos";
import UserInfos from "./UserInfos";

export default function OfferDetails({ data, addToCart, setDisplayCart }) {
  return (
    <div className="offerDetails">
      <div className="content">
        <img src={data.product_image.secure_url} alt={data.product_name} />
        <div className="details">
          <p>{data.product_price} €</p>

          <OfferInfos data={data} />
          <UserInfos data={data} />

          <div
            className="buy"
            onClick={() => {
              setDisplayCart(true);
              addToCart(data);
            }}
          >
            Ajouter au panier
          </div>
        </div>
      </div>
    </div>
  );
}
