import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

export default function Reglages() {
  const [fichier, setFichier] = useState(null);
  const [utilisateur, setUtilisateur] = useState("");
  const [email, setEmail] = useState("");
  const [motdepasse, setMotdepasse] = useState("");
  const [succes, setSucces] = useState(false);

  const { utilisateur, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "MISE A JOUR EN COURS" });
    const updatedUser = {
      utilisateurId: utilisateur._id,
      identifiant,
      email,
      motdepasse,
    };
    if (fichier) {
      const data = new FormData();
      const nomfichier = Date.now() + file.name;
      data.append("nom", nomfichier);
      data.append("fichier", fichier);
      updatedUser.profilePic = nomfichier;
    }
    try {
      const res = await axios.put("/users/" + utilisateur._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "MODIFICATION REUSSI", payload: res.data });
    } catch (err) {
      dispatch({ type: "ECHEC DE LA MODIFICATION" });
    }
  };
  return (
    <div className="reglages">
      <div className="wrapperReglages">
        <div className="titreReglages">
          <span className="titreModificationReglages">Modifier le compte</span>
          <span className="titreSuppressionReglages">Supprimer le compte</span>
        </div>
        <form className="Photo" onSubmit={handleSubmit}>
          <label>Photo de profil</label>
          <div className="photoReglages">
            <img
              src={
                file ? URL.createObjectURL(file) : PF + utilisateur.profilePic
              }
              alt=""
            />
            <label htmlFor="saisirFichier">
              <i className="IconReglages "></i>
            </label>
            <input
              type="fichier"
              id="saisirFichier"
              style={{ display: "none" }}
              onChange={(e) => setFichier(e.target.files[0])}
            />
          </div>
          <label>Identifiant</label>
          <input
            type="texte"
            placeholder={utilisateur.username}
            onChange={(e) => setUtilisateur(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={utilisateur.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Mot de passe</label>
          <input
            type="MotDePasse"
            onChange={(e) => setMotdepasse(e.target.value)}
          />
          <button className="modificationReglages" type="submit">
            Modifier
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Le profil a été modifié !
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
