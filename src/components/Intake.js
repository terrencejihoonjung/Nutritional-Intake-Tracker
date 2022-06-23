import React from "react";
import FoodBubbleDetail from "./FoodBubbleDetail";
import "../styles/intake.css";

function Intake( {foodIntake , removeFood } ) {
    return (
        <div id="food-intake" >
            <div>Summary Table</div>
            <div>
            {foodIntake.map(food => {
                return <FoodBubbleDetail key={food.fdcId} food={food} removeFood={removeFood} />
            })} 
            </div>
        </div>
    )
}

export default Intake;