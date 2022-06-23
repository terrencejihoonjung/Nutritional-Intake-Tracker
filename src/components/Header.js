import React from "react";
import "../styles/header.css";
import FoodBubbleDetail from "./FoodBubbleDetail.js";

function Header( { foodProfile, setFoodProfile} ) {
    
    function removeFood(id) {
        setFoodProfile(foodProfile.filter(food=>{
            return food.fdcId !== id
        }))
    }
    
    return (
        <div className="header" >
            <div className="header-row">
                {foodProfile.map(food => {
                    return <FoodBubbleDetail key={food.fdcId} food={food} removeFood={removeFood} />
                })}
            </div>

            <form id="submit-food">
                <button className="item-button" type="submit">Add to My Intake</button>
            </form>
        </div>
    )
}

export default Header;