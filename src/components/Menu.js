import React from "react";
import LogOut from "./LogOut";
import LogInSignOut from "./LogInSignOut";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu({
  userToken,
  setModalMenu,
  setUserToken,
  dataUsername,
}) {
  return (
    <ul>
      {userToken ? (
        <LogOut setUserToken={setUserToken} dataUsername={dataUsername} />
      ) : (
        <LogInSignOut setModalMenu={setModalMenu} />
      )}

      <li className="sell-now">Vends maintenant</li>
      <li>
        {" "}
        <FontAwesomeIcon icon="question-circle" />
      </li>
      <li className="languages">
        {" "}
        <span>FR</span>{" "}
      </li>
    </ul>
  );
}
