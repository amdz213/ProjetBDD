export default function inscription() {
    const [utilisateur, setUtilisateur] = useState("");
    const [email, setEmail] = useState("");
    const [motdepasse, setmotdepasse] = useState("");
    const [erreur, setErreur] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErreur(false);
        try {
            utilisateur,
            email,
            motdepasse,

          res.data && window.location.replace("/connexion");
        } catch (err) {
          setErreur(true);
        }
      }
    }