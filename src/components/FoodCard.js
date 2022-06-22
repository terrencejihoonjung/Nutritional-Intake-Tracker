import React from "react";

function FoodCard( { food , addFood } ) {

    function handleClick() {
        addFood(food["nix_item_id"])
    }

    return (
        <div className="column" onClick={handleClick}>
            <img src={food.photo.thumb} alt={food['food_name']} />
            <h4>{food['food_name']}</h4>
        </div>
    )
}

export default FoodCard