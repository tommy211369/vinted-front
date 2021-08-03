import React, { Fragment, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount, buyer, cart, setCart }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const protectCost = 0.4;
  const shippingCost = 0.8;

  const total = amount + shippingCost + protectCost;

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
          price: total,
        }
      );

      if (response.data === "succeeded") {
        console.log("Payment Success");

        await setIsCompleted(true);
        await setTimeout(history.push("/"), 3000);
        newCart.splice(0, newCart.length);
        setCart(newCart);
      } else {
        alert("Erreur de paiement");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      {isCompleted ? (
        <p>Paiement effectué !</p>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <div>
            <h3>Vos articles : </h3>
            {cart.map((item) => {
              return (
                <div className="checkout-form-items">
                  <p>{item.product_name}</p>
                  <p>{item.product_price.toFixed(2)} €</p>
                </div>
              );
            })}
          </div>
          <div className="checkout-form-fees">
            <div>
              <p>Frais de protection acheteurs</p>
              <p>{protectCost.toFixed(2)} €</p>
            </div>
            <div>
              <p>Frais de port</p>
              <p>{shippingCost.toFixed(2)} €</p>
            </div>
          </div>

          <div className="checkout-form-total">
            <p>Total à payer :</p>
            <p>{total.toFixed(2)} €</p>
          </div>

          <p>
            Il ne vous reste plus qu'une étape pour vous offrir vos articles.
            Vous allez payer <span>{total.toFixed(2)} €</span> (frais de
            protection et frais de port inclus).
          </p>

          <CardElement className="card-element" />
          <input type="submit" value="Payer" className="buy" />
        </form>
      )}
    </Fragment>
  );
};

export default CheckoutForm;
