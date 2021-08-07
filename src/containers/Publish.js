import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";

const Publish = ({ setDisplaySearch, userToken, dataUsername }) => {
  const [offerTitle, setOfferTitle] = useState("");
  const [offerPrice, setOfferPrice] = useState();
  const [offerBrand, setOfferBrand] = useState();
  const [offerSize, setOfferSize] = useState();
  const [offerCondition, setOfferCondition] = useState();
  const [offerColor, setOfferColor] = useState();
  const [offerCity, setOfferCity] = useState();
  const [offerPicture, setOfferPicture] = useState({});
  const [offerDescription, setOfferDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setIsLoading(true);

      // formData()
      const formData = new FormData();

      // add to formData
      formData.append("title", offerTitle);
      formData.append("price", offerPrice);
      formData.append("condition", offerCondition);
      formData.append("city", offerCity);
      formData.append("brand", offerBrand);
      formData.append("size", offerSize);
      formData.append("color", offerColor);
      formData.append("picture", offerPicture);
      formData.append("description", offerDescription);

      // send datas to server with user token
      const response = await axios.post(
        "https://vinted-back-tommy.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );

      setIsLoading(false);

      // redirect to offer page :
      history.push(`/offer/${response.data.offer._id}`);
    } catch (error) {
      console.log({ OfferFrontError: error.message });
    }
  };

  useEffect(() => {
    setDisplaySearch(false);
  }, [setDisplaySearch, userToken]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="sell">
      <form className="offer-form" onSubmit={handleSubmit}>
        <h2>Vends tes produits !</h2>
        <div className="add-picture">
          <div>
            <input
              // multiple={true}
              type="file"
              accept="image/*"
              id="image"
              onChange={(e) => {
                setOfferPicture(e.target.files[0]);
              }}
              required
            />
          </div>
        </div>

        <div>
          <div className="input-line">
            <label>Titre</label>
            <input
              type="text"
              placeholder="ex: Chemise Sézane verte"
              onChange={(e) => {
                setOfferTitle(e.target.value);
              }}
              required
            />
          </div>
          <div className="input-line">
            <label>Décris ton article</label>
            <textarea
              placeholder="ex: porté quelquesfois, taillé correctement"
              onChange={(e) => {
                setOfferDescription(e.target.value);
              }}
              required
            ></textarea>
          </div>
        </div>

        <div>
          <div className="input-line">
            <label>Marque</label>
            <input
              type="text"
              placeholder="ex: Zara"
              onChange={(e) => {
                setOfferBrand(e.target.value);
              }}
              required
            />
          </div>

          <div className="input-line">
            <label>Taille</label>
            <input
              type="text"
              placeholder="ex: L / 40 / 12"
              onChange={(e) => {
                setOfferSize(e.target.value);
              }}
              required
            />
          </div>

          <div className="input-line">
            <label>Couleur</label>
            <input
              type="text"
              placeholder="ex: Fushia"
              onChange={(e) => {
                setOfferColor(e.target.value);
              }}
              required
            />
          </div>

          <div className="input-line">
            <label>Etat</label>
            <input
              type="text"
              placeholder="Neuf avec étiquette"
              onChange={(e) => {
                setOfferCondition(e.target.value);
              }}
              required
            />
          </div>

          <div className="input-line">
            <label>Lieu</label>
            <input
              type="text"
              placeholder="ex: Paris"
              onChange={(e) => {
                setOfferCity(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div>
          <div className="input-line">
            <label>Prix</label>
            <div className="offer-price">
              <input
                type="number"
                placeholder="0,00 €"
                onChange={(e) => {
                  setOfferPrice(e.target.value);
                }}
                required
              />
              <div>
                <input type="checkbox" />
                <label>Je suis intéressé(e) par les échanges</label>
              </div>
            </div>
          </div>
        </div>

        <input type="submit" value="Publier l'article" />
      </form>

      {/* <OfferForm userToken={userToken} /> */}
    </div>
  );
};

export default Publish;
