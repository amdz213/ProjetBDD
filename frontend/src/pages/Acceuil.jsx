import { useEffect, useState } from "react";
import Header from "../components/Header";
import Posts from "../components/Poste";
import Laterale from "../components/Laterale";
import "./css/accueil.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Accueil() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="Accueil">
        <Posts posts={posts} />
        <Laterale />
      </div>
    </>
  );
}
