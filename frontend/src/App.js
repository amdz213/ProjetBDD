import Acceuil  from "./pages/acceuil/Acceuil";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Stat from "./pages/stat/Stat";
import Paramettre from "./pages/paramettre/Paramettre";
import Connexion from "./pages/connexion/Connexion";
import Inscription from "./pages/inscription/Inscription";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Acceuil />
        </Route>
        <Route path="/inscription">{user ? <Acceuil /> : <Inscription />}</Route>
        <Route path="/connexion">{user ? <Acceuil /> : <Connexion />}</Route>
        <Route path="/write">{user ? <Write /> : <Inscription />}</Route>
        <Route path="/stat">{user ? <Stat /> : <Inscription />}</Route>
        <Route path="/paramettre">{user ? <Paramettre /> : <Inscription />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/article/:articleId"></Route>
      <Route path="/Dashboard"></Route>
      </Switch>
    </Router>
  );
}

export default App;
