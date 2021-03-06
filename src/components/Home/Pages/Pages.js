import React from "react";
import "./Pages.css";

const Pages = ({ count, nbrItems, setPage }) => {
  // display pages number
  const pagesTab = [];
  let updatePages = count / nbrItems; // ex: 20 / 10 = 2
  for (let i = 1; i <= Math.ceil(updatePages); i++) {
    pagesTab.push(i);
  }
  return (
    <ul className="pagination">
      <p>Pages : </p>
      {pagesTab.map((page, index) => {
        return (
          <li key={index} onClick={() => setPage(page)}>
            {page}
          </li>
        );
      })}
    </ul>
  );
};

export default Pages;
