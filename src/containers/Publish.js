import React, { useEffect } from "react";
import OfferForm from "../components/Publish/OfferForm";

const Publish = ({ setDisplaySearch, userToken }) => {
  useEffect(() => {
    setDisplaySearch(false);
    console.log("Token dans Publish : ", userToken);
  }, [setDisplaySearch, userToken]);
  return (
    <div className="sell">
      <h1>Vendez vos produits !</h1>
      <OfferForm userToken={userToken} />
    </div>
  );
};

export default Publish;
