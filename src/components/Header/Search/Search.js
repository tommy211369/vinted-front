import React from "react";
import "./Search.css";

import SearchBar from "../SearchBar/SearchBar";
import SortComponents from "../SortComponents/SortComponents";

const Search = ({
  title,
  setTitle,
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
    <div className="search">
      <SearchBar title={title} setTitle={setTitle} />
      <SortComponents
        sort={sort}
        setSort={setSort}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        sortSwitch={sortSwitch}
        setSortSwitch={setSortSwitch}
        activeSwitch={activeSwitch}
        setActiveSwitch={setActiveSwitch}
      />
    </div>
  );
};

export default Search;
