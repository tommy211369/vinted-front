import React from "react";
import ModalSortComponents from "./ModalSortComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalSearch({
  setModalSearchBar,
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
}) {
  return (
    <div className="modal-search-bar">
      <FontAwesomeIcon icon="search" />
      <input
        type="text"
        value={title}
        placeholder="Rechercher des articles"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <ModalSortComponents
        sort={sort}
        setSort={setSort}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
      />

      <FontAwesomeIcon
        icon="times-circle"
        onClick={() => {
          setModalSearchBar(false);
        }}
        className="close-search-bar-modal"
      />
    </div>
  );
}
