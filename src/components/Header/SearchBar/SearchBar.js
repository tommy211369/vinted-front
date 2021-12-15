import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";

export default function SearchBar({ title, setTitle }) {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon="search" />
      <input
        type="text"
        value={title}
        placeholder="Rechercher des articles"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </div>
  );
}
