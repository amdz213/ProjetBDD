import Home from "./pages/home/Home";
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
          <Home />
        </Route>
        <Route path="/inscription">{user ? <Home /> : <Inscription />}</Route>
        <Route path="/connexion">{user ? <Home /> : <Connexion />}</Route>
        <Route path="/write">{user ? <Write /> : <Inscription />}</Route>
        <Route path="/stat">{user ? <Stat /> : <Inscription />}</Route>
        <Route path="/paramettre">{user ? <Paramettre /> : <Inscription />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
