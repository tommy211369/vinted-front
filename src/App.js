import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./containers/Home";
import Cookies from "js-cookie";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faSquare,
  faQuestionCircle,
  faSortDown,
  faBars,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
library.add(
  faSearch,
  faQuestionCircle,
  faSquare,
  faSortDown,
  faBars,
  faTimesCircle
);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [dataUsername, setDataUsername] = useState({}); // user name
  const [modalSearchBar, setModalSearchBar] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);
  const [title, setTitle] = useState(""); // value of title
  const [sort, setSort] = useState(""); // value of sort
  const [priceMin, setPriceMin] = useState(""); // value of priceMin
  const [priceMax, setPriceMax] = useState(""); // value of priceMax

  // set cookie token
  const setUser = (token) => {
    Cookies.set("userToken", token);
    setUserToken(token);
  };

  return (
    <Router>
      <Header
        userToken={userToken}
        dataUsername={dataUsername}
        setUserToken={setUserToken}
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
      />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <SignUp
            setUser={setUser}
            dataUsername={dataUsername}
            setDataUsername={setDataUsername}
          />
        </Route>
        <Route path="/login">
          <LogIn
            setUser={setUser}
            dataUsername={dataUsername}
            setDataUsername={setDataUsername}
          />
        </Route>

        <Route path="/">
          <Home
            title={title}
            sort={sort}
            priceMin={priceMin}
            priceMax={priceMax}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
