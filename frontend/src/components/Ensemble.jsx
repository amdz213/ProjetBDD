import Post from "../post/Post";
import "Ensemble.css";

export default function Posts({ posts }) {
  return (
    <div className="ensemble">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
