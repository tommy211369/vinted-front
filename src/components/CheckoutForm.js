import React, { useState } from "react";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CHeckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const userId = "3433546573648573648";
  const product_price = 25;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // récupérer les données du formulaire
      const cardElements = elements.getElement(CardElement);

      // envoyer à l'api stripe
      const stripeResponse = await stripe.createToken(cardElements, {
        name: userId,
      });
      console.log(stripeResponse.token.id); // token

      // envoyer le stripeToken au serveur
      const response = await axios.post("http://localhost:4000/payment", {
        stripeToken: stripeResponse.token.id,
        price: product_price,
      });

      console.log("La réponse du serveur : ", response.data);
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
