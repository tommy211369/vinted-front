import React from "react";
import { Range } from "react-range";

const SortPrice = ({ priceMin, priceMax, setPriceMin, setPriceMax }) => {
  return (
    <div className="sort-price">
      <div>
        <label>Prix min : </label>
        <input
          value={priceMin}
          type="number"
          onChange={(e) => {
            setPriceMin(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Prix max : </label>
        <input
          value={priceMax}
          type="number"
          onChange={(e) => {
            setPriceMax(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SortPrice;
