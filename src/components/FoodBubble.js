import React from "react";

function FoodBubble( { food , addFood } ) {

    function handleClick() {
        addFood(food.fdcId)
        console.log(food)
    }

    return (
        <div className="column" onClick={handleClick}>
            <h3>{food.description}</h3>
        </div>
    )
}

export default FoodBubble