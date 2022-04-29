import Acceuil from "./pages/Acceuil";
import Navigation from "./components/Navigation";
import Unique from "./pages/Unique";
import Creer from "./pages/Creer";
import Reglage from "./pages/Reglage";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./contexte/Contexte";
import Accueil from "./pages/Acceuil";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navigation />
        <Route exact path="/">
          <Acceuil />
        </Route>
        <Route path="/Inscription">{user ? <Accueil /> : <Inscription />}</Route>
        <Route path="/Connexion">{user ? <Accueil /> : <Connexion />}</Route>
        <Route path="/Creer">{user ? <Creer /> : <Inscription />}</Route>
        <Route path="/Reglage">{user ? <Reglage /> : <Inscription />}</Route>
        <Route path="/post/:postId">
          <Unique />
        </Route>
    </Router>
  );
}

export default App;
