import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount, buyer, cart, setCart }) => {
  const [completed, setCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState(
    Math.floor(Math.random() * (100000000 - 10000000) + 10000000)
  );

  console.log(orderNumber);

  const stripe = useStripe();
  const elements = useElements();

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
          buyer: buyer,
          items: cart,
        }
      );

      if (response.data === "succeeded") {
        await setCompleted(true);
        newCart.splice(0, newCart.length);
        setCart(newCart);
      } else {
        console.log(response.data);
        alert("Erreur lors du paiement !");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      {completed ? (
        <div className="payment-done">
          <p>Paiement effectué !</p>
          <div className="payment-infos">
            <div>
              <p>Numéro de commande : </p>
              <p>{orderNumber}</p>
            </div>
            <div>
              <p>Vous avez payé : </p>
              <p>{total.toFixed(2)} €</p>
            </div>
          </div>
          <Link to="/">Retourner à la page d'accueil</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <div>
            <h3>Vos articles : </h3>
            {cart.map((item) => {
              return (
                <div key={item._id} className="checkout-form-items">
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
