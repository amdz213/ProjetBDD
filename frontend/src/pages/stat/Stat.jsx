import { useContext, useState } from "react";
import "./stat.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Stat() {
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
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="stat">
      {file && (
        <img className="statImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="statForm" onSubmit={handleSubmit}>
        <div className="statFormGroup">
          <label htmlFor="fileInput">
            <i className="statIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Titre"
            className="statInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="statFormGroup">
          <textarea
            placeholder="Exprime -toi..."
            type="text"
            className="statInput statText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="statSubmit" type="submit">
          Publier
        </button>
      </form>
    </div>
  );
}
