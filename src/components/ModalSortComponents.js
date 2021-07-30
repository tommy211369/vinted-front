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
  rangeValue,
  setRangeValue,
}) => {
  return (
    <div className="modal-sort-components">
      <AscDes sort={sort} setSort={setSort} />
      <SortPrice
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
      />
    </div>
  );
};

export default SortComponents;
