import "poste.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="poste">
      {post.photo && <img className="imgPoste" src={PF + post.photo} alt="" />}
      <div className="infoPoste">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="lien">
          <span className="titrePoste">{post.title}</span>
        </Link>
        <hr />
        <span className="datePoste">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="descPoste">{post.desc}</p>
    </div>
  );
}
