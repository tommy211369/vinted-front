import React, { useEffect } from "react";

const Sell = ({ setDisplaySearch }) => {
  useEffect(() => {
    setDisplaySearch(false);
  }, [setDisplaySearch]);
  return (
    <div className="sell">
      <h1>Vendez vos produits !</h1>
    </div>
  );
};

export default Sell;
