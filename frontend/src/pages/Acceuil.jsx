import { useEffect, useState } from "react";
import Header from "../components/Header";
import Posts from "../components/poste";
import Laterale from "../components/Laterale";
import "./Acceuil.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Accueil() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
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
