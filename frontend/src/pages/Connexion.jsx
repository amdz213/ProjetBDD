import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../contexte/Contexte";
import "../pages/css/connexion.css";

export default function Connexion() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "DEBUT_CONNEXION" });
    try {
      const res = await axios.post("/auth/connexion", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "CONNEXION_REUSSI", payload: res.data });
    } catch (err) {
      dispatch({ type: "CONNEXION_ECHOUER" });
    }
  };

  return (
    <div className="Connexion">
      <span className="TitreConnexion">Login</span>
      <form className="Formulaire" onSubmit={handleSubmit}>
        <label>Utilisateur</label>
        <input
          type="Texte"
          className="Entrer"
          placeholder="Entrer votre utilisateur"
          ref={userRef}

        />
        
          <label>Mot de passe</label>
          <input
            type="Motdepasse"
            className="Entrer"
            placeholder="Entrer votre motdepasse"
            ref={passwordRef}
  
        />
        <button
          className="BoutonDeConnexion"
          type="Envoyer"
          disabled={isFetching}
        >
          Connexion
        </button>

        </form>
      <button className="BoutonDinscription">
        <Link className="lien" to="/Inscription">
          Inscription
        </Link>
      </button>
    </div>
  );
}

