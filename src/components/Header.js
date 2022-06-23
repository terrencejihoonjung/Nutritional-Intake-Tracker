import React, { useEffect } from "react";
import "../styles/header.css";
import FoodBubbleDetail from "./FoodBubbleDetail.js";

function Header( { foodProfile, setFoodProfile} ) {
    
    function removeFood(id) {
        setFoodProfile(foodProfile.filter(food=>{
            return food.fdcId !== id
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:8000/foodHistory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(foodProfile[0])
        })
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