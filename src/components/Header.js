import React, { Fragment } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import ModalSearch from "./ModalSearch";
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
  sortSwitch,
  setSortSwitch,
  activeSwitch,
  setActiveSwitch,
  displaySearch,
  setDisplaySearch,
}) {
  return (
    <div className="header">
      <div className={displaySearch ? "wrapper" : "wrapper-no-search"}>
        {!modalSearchBar && displaySearch ? (
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

        {displaySearch ? (
          <Search
            title={title}
            setTitle={setTitle}
            sort={sort}
            setSort={setSort}
            priceMin={priceMin}
            setPriceMin={setPriceMin}
            priceMax={priceMax}
            setPriceMax={setPriceMax}
            sortSwitch={sortSwitch}
            setSortSwitch={setSortSwitch}
            activeSwitch={activeSwitch}
            setActiveSwitch={setActiveSwitch}
          />
        ) : (
          <Fragment></Fragment>
        )}

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
        {modalSearchBar && displaySearch ? (
          <ModalSearch
            setModalSearchBar={setModalSearchBar}
            title={title}
            setTitle={setTitle}
            sort={sort}
            setSort={setSort}
            priceMin={priceMin}
            setPriceMin={setPriceMin}
            priceMax={priceMax}
            setPriceMax={setPriceMax}
            sortSwitch={sortSwitch}
            setSortSwitch={setSortSwitch}
            activeSwitch={activeSwitch}
            setActiveSwitch={setActiveSwitch}
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
            displaySearch={displaySearch}
          />
        ) : (
          <Fragment></Fragment>
        )}
      </div>
    </div>
  );
}
