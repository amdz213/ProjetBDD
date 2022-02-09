export default function Acceuil() {
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
        <div className="acceuil">
          <Posts posts={posts} />
          <Sidebar />
        </div>
      </>
    );
  }