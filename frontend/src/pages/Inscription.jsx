import "../pages/css/inscription.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Inscription() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErreur(false);
        try {
          username,
          email,
          password,

          res.data && window.location.replace("/connexion");
        } catch (err) {
          setError(true);
        }
      };
      return (
        <div className="Inscription">
          <span className="TitreInscription">Inscription</span>
          <form className="FormeInscription" onSubmit={handleSubmit}>
            <label>Utilisateur</label>
            <input
              type="texte"
              className="registreEntrer"
              placeholder="Entrer votre utilisateur"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              className="registreEntrer"
              placeholder="Entrer votre email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Mot de passe</label>
            <input
              type="MotDePasse"
              className="registreEntrer"
              placeholder="Entrer votre Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="Boutton" type="submit">
              S'inscrire
            </button>
          </form>
          <button className="registreBouttonInscription">
            <Link className="lien" to="/connexion">
              Connexion
            </Link>
          </button>
          {error && <span style={{color:"red", marginTop:"10px"}}>Quelque chose s'est mal passé!</span>}
        </div>
      );
    }