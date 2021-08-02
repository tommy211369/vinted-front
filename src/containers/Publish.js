import React, { useEffect } from "react";
import OfferForm from "../components/Publish/OfferForm";

const Publish = ({ setDisplaySearch, userToken, dataUsername }) => {
  useEffect(() => {
    setDisplaySearch(false);
  }, [setDisplaySearch, userToken]);
  return (
    <div className="sell">
      <h2>Vends tes produits !</h2>
      <OfferForm userToken={userToken} />
    </div>
  );
};

export default Publish;
