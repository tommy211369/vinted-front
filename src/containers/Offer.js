import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import OfferDetails from "../components/OfferDetails";

import { useParams } from "react-router-dom";
import axios from "axios";

export default function Offer() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
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
  }, [id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <OfferDetails data={data} />
    </div>
  );
}
