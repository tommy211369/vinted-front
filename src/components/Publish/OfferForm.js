import React from "react";

const OfferForm = () => {
  return (
    <form className="offer-form">
      <input type="text" placeholder="Nom de l'article" />
      <input type="number" placeholder="Prix" />
      <div>
        <label htmlFor="image">Insérez une image de l'article :</label>
        <input type="file" accept="image/*" id="image" />
      </div>
      <textarea placeholder="Description de l'article"></textarea>
      <input type="submit" value="Publier l'article" />
    </form>
  );
};

export default OfferForm;
