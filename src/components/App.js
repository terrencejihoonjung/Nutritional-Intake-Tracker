import React , { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import Catalog from "./Catalog.js";
import Profile from "./Profile.js";
import History from './History.js';
import Intake from './Intake.js';
import Header from "./Header.js";



function App() {

  const [ foodProfile , setFoodProfile] = useState([])
  const [ foodHistory , setFoodHistory] = useState([])
  const [ foodIntake , setFoodIntake] = useState([])

  useEffect(()=>{
      fetch("http://localhost:8000/foodHistory")
        .then((r) => r.json())
        .then((data) => {
          setFoodHistory([...data]);
        });
    } , [])

  function addToHistoryAndIntake(foods) {
    foods.forEach(food => {
      if (!foodHistory.includes(food)) {
        setFoodHistory(currentFoodHistory => [...foodHistory, food]);
      }
      
      if (!foodIntake.includes(food)) {
        setFoodIntake(currentFoodIntake => [...foodIntake, food]);
      }
    })
  }

  function removeFood(id) {
    setFoodProfile(foodProfile.filter(food=>{
        return food.fdcId !== id
    }))
    setFoodIntake(foodProfile.filter(food=>{
      return food.fdcId !== id
  }))
  }

  function removeFoodForever(fdcid) {
    let id
    foodHistory.forEach( food =>{
      if (food.fdcId === fdcid) {
        id = food.id;
      }
    })

    fetch(`http://localhost:8000/foodHistory/${id}`, {
      method: "DELETE"
    })
    setFoodHistory(  foodHistory.filter(food => food.fdcId !== fdcid ) )
    
  }

  return (    
    <div>
      <NavBar />
      
      <Switch>
          <Route exact path="/catalog" >
              <Header foodProfile={foodProfile} setFoodProfile={setFoodProfile} addToHistoryAndIntake={addToHistoryAndIntake} removeFood={removeFood} />      
              <Catalog foodProfile={foodProfile} setFoodProfile={setFoodProfile} />
          </Route>

          <Route exact path="/profile" >
              <Profile/>
          </Route>

          <Route exact path="/profile/history" >
            <History foods={foodHistory} removeFoodForever={removeFoodForever}  />
          </Route>

          <Route exact path="/profile/intake" >
            <Intake foodIntake={foodIntake} removeFood={removeFood} />
          </Route>

          <Route exact path="/" >
              <Home />
          </Route>
      </Switch>
    </div>

  );
}

export default App;
