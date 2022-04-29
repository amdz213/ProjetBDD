import { useContext, useState } from "react";
import "../pages/css/creer.css";
import axios from "axios";
import { Context } from "../contexte/Contexte";

export default function Creer() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
        username: user.username,
        title,
        desc,
      };
      if (file) {
        const data =new FormData();
        const nomfichier = Date.now() + nomfichier;
        data.append("nom", filename);
        data.append("fichier", file);
        newPost.photo = filename;
        
      try {
        window.location.replace("/post/" + res.data._id);
      } catch (err) {}
    };
    return (
      <div className="creer">
        {file && (
          <img className="creerImg" src={URL.createObjectURL(fichier)} alt="" />
        )}
        <form className="Formulaire" onSubmit={handleSubmit}>
          <div className="Forum">
            <label htmlFor="saisirFichier">
              <i className="creerIcon"></i>
            </label>
            <input
              type="fichier"
              id="saisirFichier"
              style={{ display: "" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="texte"
              placeholder="Titre"
              className="saisirFichier"
              autoFocus={true}
              onChange={e=>setTitle(e.target.value)}
            />
          </div>
          <div className="Forum">
            <textarea
              placeholder="Exprime toi"
              type="texte"
              className="saisie ton texte "
              onChange={e=>setDesc(e.target.value)}
            ></textarea>
          </div>
          <button className="envoyerfichier" type="envoyer">
            Publier
          </button>
        </form>
      </div>
    );
  }
}