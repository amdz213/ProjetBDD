import { useContext, useState } from "react";
import "./stat.css";
import axios from "axios";
import { Context } from "../../context/Context";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Stat() {
  const [username, setUsername] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
    };
    
    try {
      const res = await axios.get("/users/" + user._id, updatedUser);
      setSuccess(true);
      const resultat = await axios.get("/posts/" + user._id, updatedUser);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="stat">
      <div className="statWrapper">
        <div className="statTitle">
          <span className="statUpdateTitle">Statistique</span>
        </div>

        <div className="statPP">
        <label>nombre de mes commentaires</label>
          <input
            type="text"
            placeholder="40"
           
          />
          </div>


          <div className="statPP">
          <label>nombres de postes</label>
          <input
            type="text"
            placeholder= "10"
           
          />
          </div>

          <div className="statPP">
          <label>nombres d'auteurs</label>
          <input
            type="text"
            placeholder="15"
           
          />
          </div>

          <div className="statPP">
          <label>nombres de visites</label>
          <input
            type="text"
            placeholder="20"
          />
          </div>
         
      </div>
      <Sidebar />
    </div>
  );
}
