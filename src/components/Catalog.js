import React , { useState } from "react";
import FoodCard from './FoodCard.js'
import '../styles/catalog.css';
function Catalog( { foodToAddToUserProfile, setFoodToAddToUserProfile }) {
    
    const [listOfFoodToShow , setListOfFoodsToShow] = useState([])

    const x_app_key = process.env.REACT_APP_NUTRITION_APP_KEY
    
    function handleChangeKeyword(e) {
        if (e.target.value !== '') {                
            let queryLink = 'https://api.nal.usda.gov/fdc/v1/foods/search?query=' + e.target.value

            fetch(queryLink , {
                method: 'GET' ,
                headers: {
                    'X-Api-Key': x_app_key,
                }
            })
            .then(r => r.json())
            .then(myFoods => console.log(myFoods))
            }
        }

    function addFood(itemId) {
        let queryLink = `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${itemId}`
        console.log(queryLink)

        fetch(queryLink , {
            method: 'GET' ,
            headers: {
                'X-Api-Key': x_app_key
            }
        })
        .then(r => r.json())
        .then(myFood => {
            setFoodToAddToUserProfile([ ... foodToAddToUserProfile , myFood.foods[0]])
        })

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
            <div className="row">
                {listOfFoodToShow.map( (food , index) => {
                    return <FoodCard key={food['nix_item_id']+food["tag_id"]+food['tag_name']+index} food={food} addFood={addFood} />
                })}
            </div>
        </div>
    )
}

export default Catalog