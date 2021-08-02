import React from "react";
import { Link } from "react-router-dom";
import Offer from "./Offer";
import DisplayItems from "./DisplayItems";
import Pages from "./Pages";

export default function ItemsList({
  data,
  count,
  nbrItems,
  setNbrItems,
  setPage,
  userToken,
}) {
  return (
    <div className="items-list">
      <div className="wrapper">
        <div className="hero-placards-2">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          {userToken === null ? (
            <Link to="/login" className="hero-sell">
              <div>Vends maintenant</div>
            </Link>
          ) : (
            <Link to="/publish" className="hero-sell">
              <div>Vends maintenant</div>
            </Link>
          )}
          <p>Découvrir comment ça marche</p>
        </div>
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
