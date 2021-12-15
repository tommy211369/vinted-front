import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";

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
      // get form datas
      const cardElements = elements.getElement(CardElement);

      // send datas to stripe api
      const stripeResponse = await stripe.createToken(cardElements, {
        name: buyer,
      });

      // Strip API send a token
      const stripeToken = stripeResponse.token.id;

      // send token to our server
      const response = await axios.post(
        "https://vinted-back-tommy.herokuapp.com/payment",
        {
          stripeToken: stripeToken,
          price: total,
          buyer: buyer,
          items: cart,
        }
      );

      // response from server
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
          <p className="credit-card-infos">
            Entrez ces informations de Carte Bancaire pour simuler le paiement :
            <br></br>
            Numéro de carte : <span>4242 4242 4242 4242</span> <br></br>
            MM/AA : <span>04/24 </span>
            <br></br>
            CVV : <span>242 </span>
            <br></br>
            Code Postal : <span>42424</span>
          </p>
          <input type="submit" value="Payer" className="buy" />
        </form>
      )}
    </Fragment>
  );
};

export default CheckoutForm;
