import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "DECONNEXION" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              ACCEUIL
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              COMMENTAIRE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/stat">
              STATISTIQUE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "DECONNEXION"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/paramettre">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/connexion">
                CONNEXION
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/inscription">
                INSCRIPTION
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
