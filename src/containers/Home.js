import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Spinner from "../components/Spinner";
import Hero from "../components/Hero";
import ItemsList from "../components/ItemsList";
import axios from "axios";

export default function Home({ title }) {
  const [data, setData] = useState({}); // number of offers
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState({}); // offers total
  const [nbrItems, setNbrItems] = useState(5); // number of offers to display
  const [page, setPage] = useState(1); // page choose

  // at component loading
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get(
          `https://vinted-back-tommy.herokuapp.com/offers?limit=${nbrItems}&page=${page}&title=${title}`
        );
        setCount(response.data.count);
        setData(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchOffers();
  }, [nbrItems, page, title]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <Hero />
      <ItemsList
        data={data}
        // displayAllOffers={displayAllOffers}
        count={count}
        nbrItems={nbrItems}
        setNbrItems={setNbrItems}
        setPage={setPage}
        // selectPage={selectPage}
        // selectItems={selectItems}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        title={title}
      />
    </div>
  );
}
