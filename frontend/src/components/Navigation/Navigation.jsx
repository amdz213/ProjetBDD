import { useContext } from "react";
import { Context } from "../../context/Context";
import "./navigation.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "Deconnexion" });
  };
  return (
    <div className="Sommet">
      <div className="gaucheSommet">
        <i className="iconSommet fab fa-facebook-logo"></i>
        <i className="iconSommet fab fa-twitter-logo"></i>
        <i className="iconSommet fab fa-pinterest-logo"></i>
        <i className="iconSommet fab fa-instagram-logo"></i>
      </div>
      <div className="centre">
        <ul className="listeSommet">
          <li className="listeSujetSommet">
            <Link className="lien" to="/">
              Accueil
            </Link>
          </li>
          <li className="listeSujetSommet">
            <Link className="lien" to="/">
              A propos
            </Link>
          </li>
          <li className="listeSujetSommet">
            <Link className="lien" to="/">
              Contact
            </Link>
          </li>
          <li className="listeSujetSommet">
            <Link className="lien" to="/creer">
              Créer
            </Link>
          </li>
          <li className="listeSujetSommet" onClick={handleLogout}>
            {user && "Deconnexion"}
          </li>
        </ul>
      </div>
      <div className="droitSommet">
        {user ? (
          <Link to="/settings">
            <img className="imgHaute" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="listeSommet">
            <li className="listeSujetSommet">
              <Link className="lien" to="/connexion">
                Connexion
              </Link>
            </li>
            <li className="listeSujetSommet">
              <Link className="lien" to="/inscription">
                Inscription
              </Link>
            </li>
          </ul>
        )}
        <i className="iconRechercheSommet fas fa-recherche"></i>
      </div>
    </div>
  );
}
