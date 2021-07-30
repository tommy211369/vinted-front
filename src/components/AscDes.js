import React from "react";

const AscDes = ({ sort, setSort }) => {
  return (
    <div>
      <div>
        <input
          type="radio"
          onChange={() => {
            setSort("price-asc");
          }}
          name="sort"
          id="asc"
          value={sort}
        />
        <label for="asc">Croissant</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() => {
            setSort("price-desc");
          }}
          name="sort"
          id="desc"
          value={sort}
        />
        <label for="desc">Décroissant</label>
      </div>
    </div>
  );
};

export default AscDes;
