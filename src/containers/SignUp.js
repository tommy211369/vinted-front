import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

export default function SignUp({ setUser, setDataUsername, setDisplaySearch }) {
  const [token, setToken] = useState({}); // token
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [picture, setPicture] = useState("");
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    setDisplaySearch(false);
  }, [setDisplaySearch]);

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

  const handleConfirm = (e) => {
    setConfirm(e.target.value);
  };

  const handlePicture = (e) => {
    console.log(e.target.files[0]);
    setPicture(e.target.files[0]);
  };

  const userData = {
    username: username,
    email: email,
    phone: phone,
    password: password,
    picture: picture,
  };

  console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirm) {
        setDisplayError(true);
      } else {
        setDisplayError(false);
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
      }

      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h2>S'inscrire</h2>
        {displayError && (
          <p>
            Le mot de passe et la confirmation sont différents, veuillez
            réessayer
          </p>
        )}
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={handleUserName}
          required
        />
        <input
          type="email"
          placeholder="Adresse email"
          onChange={handleEmail}
          required
        />
        <input
          type="number"
          placeholder="Numéro de téléphone"
          onChange={handlePhoneNumber}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handlePassword}
          required
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          onChange={handleConfirm}
          required
        />
        <input type="file" onChange={handlePicture} accept="image/*" />

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
