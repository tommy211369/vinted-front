import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalSearchBar({ setModalSearchBar, title, setTitle }) {
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
