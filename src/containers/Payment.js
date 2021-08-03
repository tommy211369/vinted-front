import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
  const location = useLocation();
  const { amount, buyer } = location.state;

  // stripe
  const stripePromise = loadStripe(
    "pk_test_51JKI7oLawUeCn98vwswhvfYFG4T23PWyGpLt9VaPNjVo9Q9DXuKRKsXkIZwtQhec8DyTdLAH6YzyXW3dFwrHfFjV00zQc0Lrnz"
  );

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} buyer={buyer} />
    </Elements>
  );
};

export default Payment;