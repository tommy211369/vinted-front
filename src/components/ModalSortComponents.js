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
  sortSwitch,
  setSortSwitch,
  activeSwitch,
  setActiveSwitch,
}) => {
  return (
    <div className="modal-sort-components">
      <AscDes
        sort={sort}
        setSort={setSort}
        sortSwitch={sortSwitch}
        setSortSwitch={setSortSwitch}
        activeSwitch={activeSwitch}
        setActiveSwitch={setActiveSwitch}
      />
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
