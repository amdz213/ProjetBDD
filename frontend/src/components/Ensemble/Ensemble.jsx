import Post from "../post/Post";
import "./ensemble.css";

export default function Posts({ posts }) {
  return (
    <div className="ensemble">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
