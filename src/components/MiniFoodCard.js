import React from "react";

function MiniFoodCard({ food }) {
    return (
        <div className="mini-card">
            <img src={food.photo.thumb} alt={food['food_name']} />
            <h4>{food['food_name']}</h4>
            <p>Info</p> 
        </div>
    )
}

export default MiniFoodCard;