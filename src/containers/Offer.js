import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import OfferDetails from "../components/Offer/OfferDetails";

import { useParams } from "react-router-dom";
import axios from "axios";

export default function Offer({
  setDisplaySearch,
  addToCart,
  dataUsername,
  setDisplayCart,
  setDisplayLogo,
}) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setDisplayCart(false);
    setDisplaySearch(false);
    setDisplayLogo(false);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://vinted-back-tommy.herokuapp.com/offer/${id}`
        );
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id, setDisplaySearch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <OfferDetails
        data={data}
        addToCart={addToCart}
        dataUsername={dataUsername}
        setDisplayCart={setDisplayCart}
      />
    </div>
  );
}
