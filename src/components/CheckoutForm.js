import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount, buyer, cart, setCart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newCart = [...cart];
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

      if (response.data === "succeeded") {
        alert("Paiement validé");
        newCart.splice(0, newCart.length);
        setCart(newCart);
        history.push("/");
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

export default CheckoutForm;
