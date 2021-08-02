import React, { useState } from "react";
import axios from "axios";

const OfferForm = ({ userToken }) => {
  const [offerTitle, setOfferTitle] = useState("");
  const [offerPrice, setOfferPrice] = useState();
  const [offerBrand, setOfferBrand] = useState();
  const [offerSize, setOfferSize] = useState();
  const [offerCondition, setOfferCondition] = useState();
  const [offerColor, setOfferColor] = useState();
  const [offerCity, setOfferCity] = useState();
  const [offerPicture, setOfferPicture] = useState({});
  const [offerDescription, setOfferDescription] = useState("");
  const [offerData, setOfferData] = useState();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // formData()
      const formData = new FormData();

      // ajouter des paires clé/valeur
      formData.append("title", offerTitle);
      formData.append("price", offerPrice);
      formData.append("brand", offerBrand);
      formData.append("size", offerSize);
      formData.append("condition", offerCondition);
      formData.append("color", offerColor);
      formData.append("city", offerCity);
      formData.append("picture", offerPicture);
      formData.append("description", offerDescription);

      // requête vers le serveur
      const response = await axios.post(
        "https://vinted-back-tommy.herokuapp.com/offer/publish",
        formData,
        {
          header: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );

      console.log({ OfferFrontData: response.data });
      setOfferData(response.data);
    } catch (error) {
      console.log({ OfferFrontError: error.message });
    }
  };

  return (
    <form className="offer-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de l'article"
        onChange={(e) => {
          setOfferTitle(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Prix"
        onChange={(e) => {
          setOfferPrice(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="MARQUE"
        onChange={(e) => {
          setOfferBrand(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="TAILLE"
        onChange={(e) => {
          setOfferSize(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="CONDITION"
        onChange={(e) => {
          setOfferCondition(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="COLOR"
        onChange={(e) => {
          setOfferColor(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="CITY"
        onChange={(e) => {
          setOfferCity(e.target.value);
        }}
      />
      <div>
        <label htmlFor="image">Insérez une image de l'article :</label>
        <input
          // multiple={true}
          type="file"
          accept="image/*"
          id="image"
          onChange={(e) => {
            setOfferPicture(e.target.files[0]);
          }}
        />
      </div>
      <textarea
        placeholder="Description de l'article"
        onChange={(e) => {
          setOfferDescription(e.target.value);
        }}
      ></textarea>
      <input type="submit" value="Publier l'article" />
    </form>
  );
};

export default OfferForm;
