import React from "react";

export default function OfferInfos({ data }) {
  return (
    <div className="offer-infos">
      <div>
        <p>MARQUE</p>
        <p>{data.product_details[0].MARQUE.toUpperCase()}</p>
      </div>
      <div>
        <p>TAILLE</p>
        <p>{data.product_details[1].TAILLE.toUpperCase()}</p>
      </div>
      <div>
        <p>ÉTAT</p>
        <p>{data.product_details[2].ÉTAT.toUpperCase()}</p>
      </div>
      <div>
        <p>COULEUR</p>
        <p> {data.product_details[3].COULEUR.toUpperCase()}</p>
      </div>
      <div>
        <p>EMPLACEMENT</p>
        <p> {data.product_details[4].EMPLACEMENT.toUpperCase()}</p>
      </div>
    </div>
  );
}
