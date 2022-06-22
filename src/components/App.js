import React , { useState, Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import Catalog from "./Catalog.js";
import Profile from "./Profile.js";
import History from './History.js';
import Intake from './Intake.js';



function App() {
  //States 
  const [myFoods, setMyFoods] = useState([]);

  //Event Handler Functions
  function addFood(newFood) {
    setMyFoods(currentMyFoods => [...myFoods, newFood]);
  }

  return (    
    <div>
      <NavBar />   
      <Switch>
          <Route exact path="/catalog" >
              <Catalog myFoods={myFoods} addFood={addFood} />
          </Route>

          <Route exact path="/profile" >
              <Profile />
          </Route>

          <Route exact path="/profile/history" >
            <History />
          </Route>

          <Route exact path="/profile/intake" >
            <Intake />
          </Route>

          <Route exact path="/" >
              <Home />
          </Route>
      </Switch>
    </div>

  );
}

export default App;
