import React from "react";
import "../styles/header.css";
import FoodBubbleDetail from "./FoodBubbleDetail.js";

function Header( { foodProfile, setFoodProfile} ) {
    return (
        <div className="header" >
            <div className="row">
                {foodProfile.map(food => {
                    return <FoodBubbleDetail key={food.fdcId} food={food} />
                })}
            </div>

            <form id="submit-food">
                <button className="item-button" type="submit">Add to My Intake</button>
            </form>
        </div>
    )
}

export default Header;