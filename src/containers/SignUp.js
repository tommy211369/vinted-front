import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

export default function SignUp({ setUser, setDataUsername }) {
  const [token, setToken] = useState({}); // token
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhone(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const userData = {
    username: username,
    email: email,
    phone: phone,
    password: password,
  };

  console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // requete axios post:
      const response = await axios.post(
        "https://vinted-back-tommy.herokuapp.com/user/signup",
        userData
      );
      setDataUsername(response.data.resNewUser.account.username);
      setToken(response.data.resNewUser.token);
      const userToken = token;
      // enregistrer le token dans un cookie :
      setUser(userToken);
      // rediriger vers home page :
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h2>S'inscrire</h2>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={handleUserName}
        />
        <input
          type="email"
          placeholder="Adresse email"
          onChange={handleEmail}
        />
        <input
          type="number"
          placeholder="Numéro de téléphone"
          onChange={handlePhoneNumber}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handlePassword}
        />

        <div className="newsletter">
          <h4>
            <input type="checkbox" />
            <span>S'inscrire à notre newsletter</span>
          </h4>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>

        <input type="submit" value="S'inscrire" className="submit" />
        <Link to="/login" className="link-to-signup-login">
          Déjà un compte ? Connecte-toi !
        </Link>
      </form>
    </div>
  );
}