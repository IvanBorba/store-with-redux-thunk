import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Switch, Route, Link } from "react-router-dom";
import Fruits from "./pages/fruits";
import Meats from "./pages/meats";
import Misc from "./pages/misc";
import Checkout from "./pages/checkout";
import "./App.css";

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to={"/"}>
            Menu
          </Button>
          <Button color="inherit" component={Link} to={"frutas"}>
            Frutas
          </Button>
          <Button color="inherit" component={Link} to={"/carnes"}>
            Carnes
          </Button>
          <Button color="inherit" component={Link} to={"variados"}>
            Variados
          </Button>
          <Button color="inherit" component={Link} to={"/carrinho"}>
            Carrinho
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/frutas">
          <Fruits />
        </Route>
        <Route exact path="/carnes">
          <Meats />
        </Route>
        <Route exact path="/variados">
          <Misc />
        </Route>
        <Route exact path="/carrinho">
          <Checkout />
        </Route>
        <Route exact path="/">
          <div className="menu">
            <h1>Mercearia</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
