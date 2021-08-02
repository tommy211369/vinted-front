import React, { useEffect } from "react";
import OfferForm from "../components/SellNow/OfferForm";

const Publish = ({ setDisplaySearch }) => {
  useEffect(() => {
    setDisplaySearch(false);
  }, [setDisplaySearch]);
  return (
    <div className="sell">
      {/* pas encore fonctionnelle */}
      <h1>Vendez vos produits !</h1>
      <OfferForm />
    </div>
  );
};

export default Publish;
