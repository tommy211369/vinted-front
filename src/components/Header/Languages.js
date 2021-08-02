import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Languages = () => {
  const [language, setLanguage] = useState("FR");

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <FormControl variant="outlined" className="form-language">
      <InputLabel
        id="demo-simple-select-outlined-label"
        style={{ color: "#3BC1C8" }}
      >
        <FontAwesomeIcon icon="language" />
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={language}
        onChange={handleChange}
        label="Age"
      >
        <MenuItem value={"FR"}>FR</MenuItem>
        <MenuItem value={"EN"}>EN</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Languages;
