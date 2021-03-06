import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

import Logo from "./Logo";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";
import ModalSearch from "./ModalSearch/ModalSearch";
import ModalMenu from "./ModalMenu/ModalMenu";
import Cart from "./Cart/Cart";

export default function Header({
  modalSearchBar,
  setModalSearchBar,
  modalMenu,
  setModalMenu,
  userToken,
  setUserToken,
  dataUsername,
  setDataUsername,
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
  cart,
  setCart,
  totalCart,
  removeFromCart,
  displayCart,
  setDisplayCart,
  displayLogo,
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
              setDisplayCart(false);
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

        {displayLogo === false && (
          <Menu
            userToken={userToken}
            setUserToken={setUserToken}
            dataUsername={dataUsername}
            setDataUsername={setDataUsername}
            setModalMenu={setModalMenu}
            cart={cart}
            setCart={setCart}
            displayCart={displayCart}
            setDisplayCart={setDisplayCart}
          />
        )}

        {displayCart && (
            <Menu
              userToken={userToken}
              setUserToken={setUserToken}
              dataUsername={dataUsername}
              setDataUsername={setDataUsername}
              setModalMenu={setModalMenu}
              cart={cart}
              setCart={setCart}
              displayCart={displayCart}
              setDisplayCart={setDisplayCart}
            />
          ) && (
            <Cart
              cart={cart}
              setCart={setCart}
              totalCart={totalCart}
              setDisplayCart={setDisplayCart}
              removeFromCart={removeFromCart}
              dataUsername={dataUsername}
            />
          )}

        {displayLogo === false && (
          <FontAwesomeIcon
            icon="bars"
            className="menu-bars"
            onClick={() => {
              setModalMenu(!modalMenu);
              setDisplayCart(false);
              setModalSearchBar(false);
            }}
          />
        )}

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
            setDataUsername={setDataUsername}
            displaySearch={displaySearch}
            cart={cart}
            setCart={setCart}
            displayCart={displayCart}
            setDisplayCart={setDisplayCart}
          />
        ) : (
          <Fragment></Fragment>
        )}
      </div>
    </div>
  );
}
