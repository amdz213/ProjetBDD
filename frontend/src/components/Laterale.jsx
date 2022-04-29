import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/laterale.css";


export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/catégories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="barreLaterale">
      <div className="barreLateraleSujet">
        <span className="barreLateraleSujet">A propos</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="barreLateraleSujet">
        <span className="barreLateraleTitre">Catégories</span>
        <ul className="barreLateraleListe">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="lien">
              <li className="barreLateraleSujetListe">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="barreLateraleSujet">
        <span className="bareLateraleTitre">Suivez-nous !</span>
        <div className="barreLateraleSociale">
          <i className="barreLateraleIcon fab fa-facebook-logo"></i>
          <i className="barreLateraleIcon fab fa-twitter-logo"></i>
          <i className="barreLateraleIcon fab fa-pinterest-logo"></i>
          <i className="barreLateraleIcon fab fa-instagram-logo"></i>
        </div>
      </div>
    </div>
  );
}
