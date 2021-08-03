import React from "react";
import { useHistory } from "react-router-dom";
import OfferInfos from "./OfferInfos";
import UserInfos from "./UserInfos";

export default function OfferDetails({
  data,
  addToCart,
  setDisplayCart,
  dataUsername,
}) {
  const history = useHistory();
  return (
    <div className="offerDetails">
      <div className="content">
        <img src={data.product_image.secure_url} alt={data.product_name} />
        <div className="details">
          <p>{data.product_price} €</p>

          <OfferInfos data={data} />
          <UserInfos data={data} />

          {dataUsername ? (
            <div
              className="buy"
              onClick={() => {
                setDisplayCart(true);
                addToCart(data);
              }}
            >
              Ajouter au panier
            </div>
          ) : (
            <div
              className="buy"
              onClick={() => {
                history.push("/login");
              }}
            >
              Ajouter au panier
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
