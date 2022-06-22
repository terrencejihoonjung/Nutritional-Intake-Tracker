import { Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import Catalog from "./Catalog.js";
import Profile from "./Profile.js";

import '../styles/component.css';

function App() {
  return (
    <div>
      <NavBar />
      
      <Switch>
          <Route path="/catalog" >
              <Catalog />
          </Route>

          <Route path="/profile" >
              <Profile />
          </Route>

          <Route exact path="/" >
              <Home />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
