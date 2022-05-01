import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./inscription.css";

export default function Inscription() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/inscription", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/connexion");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Inscription</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Utilisateur</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Entrer votre utilisateur..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Entrer votre email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mot de Passe</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Entrer votre mot de passe..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Inscription
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Connexion
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}
