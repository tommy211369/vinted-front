import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="spinner">
      <CircularProgress style={{ color: "#3bc1c8" }} />
    </div>
  );
}
