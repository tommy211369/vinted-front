import React, { Fragment } from "react";
import Logo from "./Logo";
import Search from "./Search";
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
  sort,
  setSort,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  rangeValue,
  setRangeValue,
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
        <Search
          title={title}
          setTitle={setTitle}
          sort={sort}
          setSort={setSort}
          priceMin={priceMin}
          setPriceMin={setPriceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
        />

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
