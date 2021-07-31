import React, { useState } from "react";
import LogOut from "./LogOut";
import LogInSignOut from "./LogInSignOut";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalMenu({
  setModalMenu,
  userToken,
  setUserToken,
  dataUsername,
}) {
  const [language, setLanguage] = useState("FR");

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <ul className="modal-menu">
      {userToken ? (
        <LogOut setUserToken={setUserToken} dataUsername={dataUsername} />
      ) : (
        <LogInSignOut setModalMenu={setModalMenu} />
      )}

      <li className="sell-now">Vends maintenant</li>
      <li className="languages">
        <FormControl variant="outlined" className="form-language">
          <InputLabel id="demo-simple-select-outlined-label">
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
      </li>
      <FontAwesomeIcon
        icon="times-circle"
        onClick={() => {
          setModalMenu(false);
        }}
        className="close-menu-modal"
      />
    </ul>
  );
}
