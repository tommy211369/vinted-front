import React, { useState } from "react";
import "./App.css";
import Payment from "./containers/Payment";
import Header from "./components/Header/Header";
import Home from "./containers/Home";
import Cookies from "js-cookie";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import Publish from "./containers/Publish";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faSquare,
  faQuestionCircle,
  faSortDown,
  faAngleUp,
  faAngleDown,
  faBars,
  faTimesCircle,
  faLanguage,
  faShoppingCart,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
library.add(
  faSearch,
  faQuestionCircle,
  faSquare,
  faSortDown,
  faBars,
  faTimesCircle,
  faAngleUp,
  faAngleDown,
  faLanguage,
  faShoppingCart,
  faTrashAlt
);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null); // token stored when login or signup
  const [dataUsername, setDataUsername] = useState(
    Cookies.get("username") || null
  ); // user name stored when login or signup
  const [modalSearchBar, setModalSearchBar] = useState(false); // search components for smaller devices
  const [modalMenu, setModalMenu] = useState(false); // nav components for smaller devices
  const [title, setTitle] = useState(""); // value of title
  const [sort, setSort] = useState(""); // value of sort
  const [priceMin, setPriceMin] = useState(""); // value of priceMin
  const [priceMax, setPriceMax] = useState(""); // value of priceMax
  const [sortSwitch, setSortSwitch] = useState(""); // sort by asc price or desc price
  const [activeSwitch, setActiveSwitch] = useState(false); // sort activation button
  const [displaySearch, setDisplaySearch] = useState(true); // display the search bar or not
  const [displayLogo, setDisplayLogo] = useState(false); // display only the logo in the header
  const [cart, setCart] = useState([]); // cart
  const [displayCart, setDisplayCart] = useState(false); // display cart on click

  // store token as cookie
  const setUser = (token) => {
    setUserToken(token);
    Cookies.set("userToken", token);
  };

  // store username as cookie
  const setUserNameCookie = (username) => {
    setDataUsername(username);
    Cookies.set("username", username);
  };

  let totalCart = 0;

  // ADD items to cart
  const addToCart = (item) => {
    // vérifie si la fonction répond
    console.log(item);
    // créer une copie de cart
    const newCart = [...cart];
    // ajouter dans cart
    newCart.push({ ...item, ...newCart });
    // mettre à jour le state
    setCart(newCart);
  };

  // REMOVE items from cart
  const removeFromCart = (item) => {
    const newCart = [...cart];
    const exist = newCart.find((elem) => elem.id === item.id);
    const index = newCart.indexOf(exist);
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Router>
      <Header
        userToken={userToken}
        setUserToken={setUserToken}
        dataUsername={dataUsername}
        setDataUsername={setDataUsername}
        modalSearchBar={modalSearchBar}
        setModalSearchBar={setModalSearchBar}
        modalMenu={modalMenu}
        setModalMenu={setModalMenu}
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
        displaySearch={displaySearch}
        cart={cart}
        setCart={setCart}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        totalCart={totalCart}
        removeFromCart={removeFromCart}
        displayLogo={displayLogo}
        setDisplayLogo={setDisplayLogo}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offer
            setDisplaySearch={setDisplaySearch}
            addToCart={addToCart}
            dataUsername={dataUsername}
            displayCart={displayCart}
            setDisplayCart={setDisplayCart}
            setDisplayLogo={setDisplayLogo}
          />
        </Route>
        <Route path="/signup">
          <SignUp
            setUser={setUser}
            setUserNameCookie={setUserNameCookie}
            setDisplaySearch={setDisplaySearch}
          />
        </Route>
        <Route path="/login">
          <LogIn
            setUser={setUser}
            setUserNameCookie={setUserNameCookie}
            setDisplaySearch={setDisplaySearch}
          />
        </Route>
        <Route path="/publish">
          <Publish
            userToken={userToken}
            setDisplaySearch={setDisplaySearch}
            dataUsername={dataUsername}
          />
        </Route>
        <Route path="/payment">
          <Payment
            userToken={userToken}
            setDisplaySearch={setDisplaySearch}
            cart={cart}
            setCart={setCart}
            setDisplayLogo={setDisplayLogo}
          />
        </Route>

        <Route path="/">
          <Home
            title={title}
            sort={sort}
            priceMin={priceMin}
            priceMax={priceMax}
            setDisplaySearch={setDisplaySearch}
            setDisplayLogo={setDisplayLogo}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
