import React from "react";
import AscDes from "./AscDes";
import RangeSlider from "./RangeSlider";

const SortComponents = ({
  sort,
  setSort,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
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
      <RangeSlider
        priceMin={priceMin}
        priceMax={priceMax}
        setPriceMin={setPriceMin}
        setPriceMax={setPriceMax}
      />
    </div>
  );
};

export default SortComponents;
