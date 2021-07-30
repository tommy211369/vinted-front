import React from "react";
import LogOut from "./LogOut";
import LogInSignOut from "./LogInSignOut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalMenu({
  setModalMenu,
  userToken,
  setUserToken,
  dataUsername,
}) {
  return (
    <ul className="modal-menu">
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
