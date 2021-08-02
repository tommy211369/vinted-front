import React, { useState } from "react";
import "./App.css";
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
  faLanguage
);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null); // token storage when login or signup
  const [dataUsername, setDataUsername] = useState({}); // user name
  const [modalSearchBar, setModalSearchBar] = useState(false); // search components for smaller devices
  const [modalMenu, setModalMenu] = useState(false); // nav components for smaller devices
  const [title, setTitle] = useState(""); // value of title
  const [sort, setSort] = useState(""); // value of sort
  const [priceMin, setPriceMin] = useState(""); // value of priceMin
  const [priceMax, setPriceMax] = useState(""); // value of priceMax
  const [sortSwitch, setSortSwitch] = useState(""); // sort by asc price or desc price
  const [activeSwitch, setActiveSwitch] = useState(false); // sort activation button
  const [displaySearch, setDisplaySearch] = useState(true); // display the search bar or not

  // store token as cookie
  const setUser = (token) => {
    setUserToken(token);
    Cookies.set("userToken", token);
  };

  return (
    <Router>
      <Header
        userToken={userToken}
        setUserToken={setUserToken}
        dataUsername={dataUsername}
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
      />
      <Switch>
        <Route path="/offer/:id">
          <Offer setDisplaySearch={setDisplaySearch} />
        </Route>
        <Route path="/signup">
          <SignUp
            setUser={setUser}
            dataUsername={dataUsername}
            setDataUsername={setDataUsername}
            setDisplaySearch={setDisplaySearch}
          />
        </Route>
        <Route path="/login">
          <LogIn
            setUser={setUser}
            dataUsername={dataUsername}
            setDataUsername={setDataUsername}
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

        <Route path="/">
          <Home
            title={title}
            sort={sort}
            priceMin={priceMin}
            priceMax={priceMax}
            setDisplaySearch={setDisplaySearch}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
