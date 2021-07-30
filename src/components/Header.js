import React, { Fragment } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import ModalSearchBar from "./ModalSearchBar";
import ModalMenu from "./ModalMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({
  modalSearchBar,
  setModalSearchBar,
  modalMenu,
  setModalMenu,
  userToken,
  setUserToken,
  dataUsername,
  title,
  setTitle,
}) {
  return (
    <div className="header">
      <div className="wrapper">
        {!modalSearchBar ? (
          <FontAwesomeIcon
            icon="search"
            className="menu-search-icon"
            onClick={() => {
              setModalSearchBar(true);
              setModalMenu(false);
            }}
          />
        ) : (
          <Fragment></Fragment>
        )}

        <Logo />
        <SearchBar title={title} setTitle={setTitle} />

        <Menu
          userToken={userToken}
          setUserToken={setUserToken}
          dataUsername={dataUsername}
          setModalMenu={setModalMenu}
        />
        <FontAwesomeIcon
          icon="bars"
          className="menu-bars"
          onClick={() => {
            setModalMenu(!modalMenu);
            setModalSearchBar(false);
          }}
        />

        {/* Modals */}
        {modalSearchBar ? (
          <ModalSearchBar
            setModalSearchBar={setModalSearchBar}
            title={title}
            setTitle={setTitle}
          />
        ) : (
          <Fragment></Fragment>
        )}
        {modalMenu ? (
          <ModalMenu
            setModalMenu={setModalMenu}
            userToken={userToken}
            setUserToken={setUserToken}
            dataUsername={dataUsername}
          />
        ) : (
          <Fragment></Fragment>
        )}
      </div>
    </div>
  );
}
