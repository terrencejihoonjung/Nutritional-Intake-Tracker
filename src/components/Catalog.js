import React , { useState } from "react";
import FoodCard from './FoodCard.js'
import '../styles/catalog.css';
import '../styles/component.css';

function Catalog({ myFoods, addFood }) {
    
    const [listOfFoodToShow , setListOfFoodsToShow] = useState([])

    const x_app_key = process.env.REACT_APP_NUTRITION_APP_KEY
    const x_app_id = process.env.REACT_APP_NUTRITION_APP_ID
    
    function handleChangeKeyword(e) {
        if (e.target.value !== '') {                
            let queryLink = 'https://trackapi.nutritionix.com/v2/search/instant?query=' + e.target.value

            fetch(queryLink , {
                method: 'GET' ,
                headers: {
                    'x-app-id': x_app_id,
                    'x-app-key': x_app_key
                }
            })
            .then(r => r.json())
            .then(myFoods => {
                console.log(myFoods)
                setListOfFoodsToShow([ ...myFoods.branded , ...myFoods.common])
                console.log(queryLink)
            })
        }
    }

    return (
        <div>
            <div className="search-bar" >
                <label htmlFor="search">Search for Food Item: </label>
                <input
                    type="text"
                    id="search"
                    placeholder="Type a food to search..."
                    onChange={handleChangeKeyword}
                />
            </div>
            <ul id="food-list">
                {listOfFoodToShow.map( (food , index) => {
                return <FoodCard key={food['nix_item_id']+food["tag_id"]+food['tag_name']+index} food={food} />
                })}
            </ul>
        </div>
    )
}
export default Catalog