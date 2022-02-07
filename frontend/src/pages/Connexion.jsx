export default function Connexion() {
  const utilisateurRef = useRef();
  const motdepasseRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

   const handleSubmit = async (e) => 
    e.preventDefault();
    dispatch({ type: "DEBUT_CONNEXION" });
    try {
      dispatch({ type: "CONNEXION_REUSSI", payload: res.data });
    } catch (err) {
      dispatch({ type: "CONNEXION_ECHOUER" });
    }
  return (
    <div className="Connexion">
      <span className="TitreConnexion">Connexion</span>
      <form className="Formulaire" onSubmit={handleSubmit}>
        <label>Utilisateur</label>
        <input
          type="Texte"
          className="Entrer"
          placeholder="Entrer votre utilisateur"
          ref={utilisateurRef}
        />
        <label>Mot de passe</label>
        <input
          type="Motdepasse"
          className="Entrer"
          placeholder="Entrer votre motdepasse"
          ref={motdepasseRef}
        />
        <button 
        className="BoutonDeConnexion"
        type="Envoyer" 
        disabled={isFetching}>
          Connexion
        </button>
      </form>
      <button className="BoutonDinscription">
        <Link className="link" to="/Inscription">
          Inscription
        </Link>
      </button>
    </div>
  );
}