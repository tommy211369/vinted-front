import React, { Fragment, useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import ModalSearch from "./ModalSearch";
import ModalMenu from "./ModalMenu";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
}) {
  // au click sur icon cart, afficher le panier
  const [displayCart, setDisplayCart] = useState(false);

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

        {displayCart && (
          <Cart
            cart={cart}
            setCart={setCart}
            totalCart={totalCart}
            setDisplayCart={setDisplayCart}
            removeFromCart={removeFromCart}
            dataUsername={dataUsername}
          />
        )}

        <FontAwesomeIcon
          icon="bars"
          className="menu-bars"
          onClick={() => {
            setModalMenu(!modalMenu);
            setDisplayCart(false);
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
            setDataUsername={setDataUsername}
            displaySearch={displaySearch}
            cart={cart}
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
