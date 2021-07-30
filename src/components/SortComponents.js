import React from "react";
import AscDes from "./AscDes";
import SortPrice from "./SortPrice";

const SortComponents = ({
  sort,
  setSort,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
}) => {
  return (
    <div className="sort-components">
      <AscDes sort={sort} setSort={setSort} />
      <SortPrice
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
      />
    </div>
  );
};

export default SortComponents;
