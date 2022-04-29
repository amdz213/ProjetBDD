import { useContext, useEffect, useState } from "react";
import { Context } from "../contexte/Contexte";
import "posteunique.css";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function PosteUnique() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [titre, setTitre] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/Ensemble/" + path);
      setPost(res.data);
      setTitre(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/Ensemble/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/Ensemble/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="posteUnique">
      <div className="posteUniqueWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="posteUniqueImg" />
        )}
        {updateMode ? (
          <input
            type="texte"
            value={titre}
            className="posteUniqueTitreInput"
            autoFocus
            onChange={(e) => setTitre(e.target.value)}
          />
        ) : (
          <h1 className="posteUniqueTitre">
            {titre}
            {post.username === user?.username && (
              <div className="posteUniqueEditer">
                <i
                  className="posteUniqueIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="posteUniqueIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="posteUniqueInfo">
          <span className="posteUniqueAuteur">
            Auteur:
            <Link to={`/?user=${post.username}`} className="lien">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="posteUniqueDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="posteUniqueDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="posteUniqueDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="posteUniqueBouton" onClick={handleUpdate}>
            Modification
          </button>
        )}
      </div>
    </div>
  );
}
