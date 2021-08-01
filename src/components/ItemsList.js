import React from "react";
import Offer from "./Offer";
import DisplayItems from "./DisplayItems";
import Pages from "./Pages";

export default function ItemsList({
  data,
  count,
  nbrItems,
  setNbrItems,
  setPage,
}) {
  return (
    <div className="items-list">
      <div className="wrapper">
        <div className="items-header">
          <h2>Articles populaires</h2>
          <p
            onClick={() => {
              setNbrItems(count);
            }}
          >
            Voir tout
          </p>
        </div>

        <div className="pages-items">
          {/* choose number of offers */}
          <DisplayItems
            setNbrItems={setNbrItems}
            // selectItems={selectItems}
            nbrItems={nbrItems}
          />

          {/* choose page  */}
          <Pages count={count} nbrItems={nbrItems} setPage={setPage} />
        </div>

        {/* display offers */}
        <div className="offers">
          {data.map((offer, index) => {
            return <Offer key={index} offer={offer} />;
          })}
        </div>
      </div>
    </div>
  );
}
