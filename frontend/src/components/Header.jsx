import "header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Bienvenue sur mon Blog</span>
        <span className="headerTitleLg">C.A.M</span>
      </div>
      <img
        className="headerImg"
        src="/images/blogging.jpg"
        alt=""
      />
    </div>
  );
}
