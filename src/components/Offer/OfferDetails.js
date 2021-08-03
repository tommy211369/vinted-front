import React from "react";
import OfferInfos from "./OfferInfos";
import UserInfos from "./UserInfos";

export default function OfferDetails({ data, addToCart }) {
  // fonction vérifie si l'item est déjà dans le panier

  // Existe déjà dans cart ?
  // const exist = newCart.find((elem) => elem._id === item._id)
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
