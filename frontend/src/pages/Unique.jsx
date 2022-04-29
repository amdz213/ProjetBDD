import Laterale from "../components/Laterale";
import SinglePost from "../components/PosteUnique";
import "../pages/css/unique.css";

export default function Single() {
  return (
    <div className="article">
      <SinglePost />
      <Laterale />
    </div>
  );
}
