import React, { useEffect } from "react";
import "../styles/header.css";
import FoodBubbleDetail from "./FoodBubbleDetail.js";

function Header( { foodProfile, setFoodProfile, addToHistoryAndIntake, removeFood } ) {

    function handleSubmit(e) {
        e.preventDefault();

        foodProfile.forEach( food => {
            addToHistoryAndIntake( food , 'foodHistory' )
            addToHistoryAndIntake( food , 'foodIntake' )
        })

        setFoodProfile([])
    }
    
    return (
        <div className="header" >
            <div className="header-row">
                {foodProfile.map(food => {
                    return <FoodBubbleDetail key={food.fdcId} food={food} removeFood={removeFood} />
                })}
            </div>

            <form id="submit-food" onSubmit={handleSubmit}>
                <button className="item-button" type="submit">Add to My Intake</button>
            </form>
        </div>
    )
}

export default Header;