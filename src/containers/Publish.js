import React, { useEffect } from "react";
import OfferForm from "../components/Publish/OfferForm";

const Publish = ({ setDisplaySearch, userToken, dataUsername }) => {
  useEffect(() => {
    setDisplaySearch(false);
  }, [setDisplaySearch, userToken]);
  return (
    <div className="sell">
      <h1>Bonjour {dataUsername} !</h1>
      <h2>Vendez vos produits !</h2>
      <OfferForm userToken={userToken} />
    </div>
  );
};

export default Publish;
