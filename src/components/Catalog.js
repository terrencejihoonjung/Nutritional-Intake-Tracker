import React , { useState } from "react";
import FoodBubble from './FoodBubble'
import '../styles/catalog.css';

function Catalog( { foodProfile, setFoodProfile }) {
    
    const [keyword, SetKeyWord] = useState('')
    const [foods, setFoods] = useState([])

    const api_key = process.env.REACT_APP_NUTRITION_API_KEY
    
    function handleChangeKeyword(e) {
        SetKeyWord(e.target.value)
    }

    function handleSubmitKeyword(e) {
        e.preventDefault()
        let queryLink = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${keyword}&api_key=${api_key}` 

        fetch(queryLink , {
            method: 'GET'
        })
            .then(r => r.json())
            .then(myFoods => {
                setFoods(myFoods.foods.filter( ( food ,index )=>{
                    let duplicate
                    
                    if (index ===0) {
                        duplicate = false
                    } else {
                        duplicate = ( myFoods.foods[index -1].description === food.description )
                    }

                    return (!duplicate) && ( !(food.servingSize===undefined && food.foodMeasures.length===0))   
                }))
            })
    }

    function addFood(id) {
        if ( foodProfile.filter(food=> {
            return food.fdcId === id
        }).length === 0 ){
            setFoodProfile( [...foodProfile , ...foods.filter( food=> {
                return food.fdcId === id
            })])
        }
    }

    return (
        <div>
            <div className="search-bar" >
                <form onSubmit={handleSubmitKeyword} >
                    <label htmlFor="search">Search for Food Item: </label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Type a food to search..."
                        onChange={handleChangeKeyword}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="catalog-row">
                {foods.map( food => {
                    return <FoodBubble key={food.fdcId} food={food} addFood={addFood} />
                })}
            </div>
        </div>
    )
}

export default Catalog