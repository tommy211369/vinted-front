import React, { useEffect } from "react";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const Payment = ({ cart, setCart, setDisplaySearch, setDisplayLogo }) => {
  const location = useLocation();
  const { amount, buyer } = location.state; // took from cart

  useEffect(() => {
    setDisplayLogo(true);
    setDisplaySearch(false);
  }, [setDisplayLogo, setDisplaySearch]);

  // stripe
  const stripePromise = loadStripe(
    "pk_test_51JKI7oLawUeCn98vwswhvfYFG4T23PWyGpLt9VaPNjVo9Q9DXuKRKsXkIZwtQhec8DyTdLAH6YzyXW3dFwrHfFjV00zQc0Lrnz"
  );

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        amount={amount}
        buyer={buyer}
        cart={cart}
        setCart={setCart}
      />
    </Elements>
  );
};

export default Payment;
