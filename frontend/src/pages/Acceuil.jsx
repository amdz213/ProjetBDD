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
        <Sidebar />
      </div>
    </>
  );
}
