import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Hero from "../components/Hero";
import ItemsList from "../components/ItemsList";
import axios from "axios";

export default function Home({
  title,
  sort,
  priceMin,
  priceMax,
  setDisplaySearch,
}) {
  const [data, setData] = useState({}); // number of offers
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState({}); // offers total
  const [nbrItems, setNbrItems] = useState(5); // number of offers to display
  const [page, setPage] = useState(1); // page chosen

  // at component loading
  useEffect(() => {
    setDisplaySearch(true);

    if (nbrItems === count) {
      setPage(1);
    }
    const fetchOffers = async () => {
      try {
        const response = await axios.get(
          `https://vinted-back-tommy.herokuapp.com/offers?limit=${nbrItems}&page=${page}&title=${title}&sort=${sort}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        setCount(response.data.count);
        setData(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchOffers();
  }, [nbrItems, page, title, sort, priceMin, priceMax, setDisplaySearch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <Hero />
      <ItemsList
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
