import React from "react";

function FoodBubble( { food , addFood } ) {

    function handleClick() {
        console.log(food)
        addFood(food.fdcId)
    }

    return (
        <div className="column" onClick={handleClick}>
            <h3>{food.description}</h3>
        </div>
    )
}

export default FoodBubble