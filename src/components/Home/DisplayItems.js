import React from "react";

const DisplayItems = ({ setNbrItems, nbrItems }) => {
  return (
    <div>
      <p>Articles par pages :</p>
      <select
        value={nbrItems}
        onChange={(e) => {
          setNbrItems(Number(e.target.value));
        }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default DisplayItems;