import React from "react";
import FoodBubbleDetail from "./FoodBubbleDetail";
import "../styles/intake.css";

function Intake( {foodIntake , removeFood } ) {
    return (
        <div id="food-intake" >            
            <div>
                <h1>These are what I ate today:</h1>
                {foodIntake.map(food => {
                    return <FoodBubbleDetail key={food.fdcId} food={food} removeFood={removeFood} />
                })} 
            </div>
            <div id="health-table">
                <table>
                    <tr>
                        <td>Calories</td>
                        <td>data</td>
                    </tr>
                </table> 
            </div>
        </div>
    )
}

export default Intake;