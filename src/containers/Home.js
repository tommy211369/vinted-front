import React, { useState, useEffect } from "react";

import axios from "axios";

import Spinner from "../components/Spinner/Spinner";
import Hero from "../components/Home/Hero/Hero";
import ItemsList from "../components/Home/ItemsList/ItemsList";

export default function Home({
  title,
  sort,
  priceMin,
  priceMax,
  setDisplaySearch,
  userToken,
  setDisplayLogo,
}) {
  const [data, setData] = useState({}); // number of offers
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState({}); // offers total
  const [nbrItems, setNbrItems] = useState(5); // number of offers to display
  const [page, setPage] = useState(1); // page chosen

  // at component loading
  useEffect(() => {
    setDisplaySearch(true);
    setDisplayLogo(false);

    if (nbrItems === count) {
      setPage(1);
    }
    const fetchOffers = async () => {
      try {
        const response = await axios.get(
          `https://vinted-backend-9rwc.onrender.com/offers?limit=${nbrItems}&page=${page}&title=${title}&sort=${sort}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        setCount(response.data.count);
        setData(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchOffers();
  }, [
    nbrItems,
    page,
    title,
    sort,
    priceMin,
    priceMax,
    setDisplaySearch,
    count,
    setDisplayLogo,
  ]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <Hero userToken={userToken} />
      <ItemsList
        userToken={userToken}
        data={data}
        count={count}
        nbrItems={nbrItems}
        setNbrItems={setNbrItems}
        setPage={setPage}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        title={title}
      />
    </div>
  );
}
