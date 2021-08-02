import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";

const RangeSlider = ({ priceMin, priceMax, setPriceMin, setPriceMax }) => {
  const [value, setValue] = useState([0, 300]);

  useEffect(() => {
    setPriceMin(value[0]);
    setPriceMax(value[1]);
  }, [value, priceMin, priceMax, setPriceMin, setPriceMax]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="slider">
      <p>Prix compris entre : </p>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        max={300}
        style={{ color: "#3bc1c8" }}
      />
    </div>
  );
};

export default RangeSlider;
