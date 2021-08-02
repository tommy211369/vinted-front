import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";

export default function SignUp({ setUser, setDataUsername, setDisplaySearch }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [picture, setPicture] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    setPicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirm) {
        setDisplayError(true);
      } else {
        setDisplayError(false);

        setIsLoading(true);

        const formData = new FormData();

        formData.append("username", username);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("password", password);
        formData.append("picture", picture);

        // requete axios post:
        const response = await axios.post(
          "https://vinted-back-tommy.herokuapp.com/user/signup",
          formData
        );

        setDataUsername(response.data.resNewUser.account.username);
        // enregistrer le token dans un cookie :
        setUser(response.data.resNewUser.token);

        setIsLoading(false);
        // rediriger vers home page :
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return isLoading ? (
    <Spinner />
  ) : (
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
        <input type="file" onChange={handlePicture} accept="image/*" required />

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
