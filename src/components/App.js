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
  useEffect(()=>{
      fetch("http://localhost:8000/dailyIntake")
        .then((r) => r.json())
        .then((data) => {
          setFoodIntake([...data]);
        });
    } , [])

  // function calculateInfo(string) {
  //   const numString = parseInt(string, 10);
  //   const calculatedValue = numString * quantity;
  //   return calculatedValue.toString();
  // }


  function isIn( food, foods) {
    
    let thatFood = foods.filter( (oneFood) =>{
      return oneFood.fdcId === food.fdcId
    })
    
    if ( thatFood.length === 0 ) {
      return [false , undefined ]
    } else {
      return [true , thatFood[0].quantity ]
    }
  }

  function addToHistoryAndIntake(food , foodList) {
    // food history
    
    if (foodList === "foodHistory") {
      
      if ( (! (isIn( food, foodHistory)[0]) ) ) {
          setFoodHistory(foodHistory => [...foodHistory, food]);

          fetch("http://localhost:8000/foodHistory", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            body: JSON.stringify(food)
            })
                .then(r => r.json())
                .then(() => {
          })

        } else {
          
          let originalQuantity = isIn( food, foodHistory)[1]
          let newQuantity = originalQuantity + food.quantity        
          console.log(food.fdcId)
          fetch(`http://localhost:8000/foodHistory/${food.fdcId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({quantity: newQuantity})
          })
          .then(r => r.json())
          .then( setFoodHistory(foodHistory => foodHistory.map( oneFood=>{
            if (oneFood.fdcId === food.fdcId) {
              return {...oneFood , quantity:newQuantity }
            } else {
              return {...oneFood}
            }
          })) )
        }
    }

    // daily intake

    if (foodList === "foodIntake") {
      
      if ( (! (isIn( food, foodIntake)[0]) ) ) {
          setFoodIntake(foodIntake => [...foodIntake, food]);

          fetch("http://localhost:8000/dailyIntake", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            body: JSON.stringify(food)
            })
                .then(r => r.json())
                .then(() => {
          })

        } else {
          
          let originalQuantity = isIn( food, foodIntake)[1]
          let newQuantity = originalQuantity + food.quantity        
          console.log(food.fdcId)
          fetch(`http://localhost:8000/dailyIntake/${food.fdcId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({quantity: newQuantity})
          })
          .then(r => r.json())
          .then( setFoodIntake(foodIntake => foodIntake.map( oneFood=>{
            if (oneFood.fdcId === food.fdcId) {
              return {...oneFood , quantity:newQuantity }
            } else {
              return {...oneFood}
            }
          })) )
        }
    }

    //
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
