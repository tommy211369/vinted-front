import React from "react";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CHeckoutForm = ({ amount, buyer }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // récupérer les données du formulaire
      const cardElements = elements.getElement(CardElement);

      // envoyer à l'api stripe
      const stripeResponse = await stripe.createToken(cardElements, {
        name: buyer,
      });

      console.log("Token front : ", stripeResponse.token.id);
      const stripeToken = stripeResponse.token.id; // token

      // envoyer le stripeToken au serveur
      const response = await axios.post(
        "https://vinted-back-tommy.herokuapp.com/payment",
        {
          stripeToken: stripeToken,
          price: amount,
        }
      );

      console.log("La réponse du serveur FRONT : ", response.data);

      if (response.data.status === "succeeded") {
        alert("Paiement validé");
      } else {
        alert("Erreur de paiement");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <CardElement className="card-element" />
      <input type="submit" />
    </form>
  );
};

export default CHeckoutForm;
