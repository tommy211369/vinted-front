import React from "react";
import SearchBar from "./SearchBar";
import SortComponents from "./SortComponents";

const Search = ({
  title,
  setTitle,
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
    <div className="search">
      <SearchBar title={title} setTitle={setTitle} />
      <SortComponents
        sort={sort}
        setSort={setSort}
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

export default Search;
