import React from 'react';
import FoodBubbleDetail from "./FoodBubbleDetail";
import "../styles/profile.css"

function History({ foods, removeFoodForever }) {
    
    return (
        <div>
            <h1>My Food History</h1>
            <br/>
            <div className="catalog-row">
                {foods.map( food => {
                    return <FoodBubbleDetail key={food.fdcId} food={food} removeFood={ removeFoodForever } />
                })}
            </div>
        </div>
    )
}

export default History;