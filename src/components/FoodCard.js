import React from "react";

function FoodCard( { food } ) {

    return (
        <li className="card">
            <img src={food.photo.thumb} alt={food['food_name']} />
            <h4>{food.food_name}</h4>
            <button className="card-button">Add to My Intake</button>
        </li>
    )
}

export default FoodCard