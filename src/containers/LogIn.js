import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

export default function LogIn({ setUser, setDataUsername, setDisplaySearch }) {
  const [token, setToken] = useState({});
  const [unauthorized, setUnauthorized] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setDisplaySearch(false);
    console.log("Token dans Login : ", token); // lXdDu7XKNGmjKk88uuOUgFMzOSRznjHbMZOtLomyOW41xfFac8MBHBdmdEw2ONnl
  }, [setDisplaySearch, token]);

  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const userData = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // requete axios post:
      const response = await axios.post(
        "https://vinted-back-tommy.herokuapp.com/user/login",
        userData
      );

      setDataUsername(response.data.resUser.account.username);
      setToken(response.data.resUser.token);
      //   enregistrer le token dans un cookie :
      setUser(token);
      // rediriger vers home page :
      history.push("/");
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 401) {
        setUnauthorized(true);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h2>Se connecter</h2>
        {unauthorized && (
          <p className="unauthorized">Email / Mot de passe non reconnu</p>
        )}
        <input
          type="email"
          placeholder="Adresse email"
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handlePassword}
        />
        <input type="submit" className="submit" value="Se connecter" />
        <Link to="/signup" className="link-to-signup-login">
          Pas encore de compte ? Inscris toi !
        </Link>
      </form>
    </div>
  );
}
