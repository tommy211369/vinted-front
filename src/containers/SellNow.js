import React, { useEffect } from "react";

const Sell = ({ setDisplaySearch }) => {
  useEffect(() => {
    setDisplaySearch(false);
  }, [setDisplaySearch]);
  return (
    <div className="sell">
      {/* pas encore fonctionnelle */}
      <h1>Vendez vos produits !</h1>
    </div>
  );
};

export default Sell;
