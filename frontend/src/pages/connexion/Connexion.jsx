import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./connexion.css";

export default function Connexion() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/connexion", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Connexion</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Utilisateur</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Entrer votre utilisateur ..."
          ref={userRef}
        />
        <label>Mot de passe</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Entrer votre mot de passe..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Connexion
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/inscription">
          Inscription
        </Link>
      </button>
    </div>
  );
}
