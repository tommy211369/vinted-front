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
  sortSwitch,
  setSortSwitch,
  activeSwitch,
  setActiveSwitch,
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
        sortSwitch={sortSwitch}
        setSortSwitch={setSortSwitch}
        activeSwitch={activeSwitch}
        setActiveSwitch={setActiveSwitch}
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
