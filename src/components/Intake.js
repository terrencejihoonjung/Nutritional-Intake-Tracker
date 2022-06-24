import React, { useState } from "react";
import FoodBubbleDetail from "./FoodBubbleDetail";
import "../styles/intake.css";

const defaultInfo = {
    calories: "",
    protein: "",
    sugar: "",
    carbohydrates: "",
    totalFat: "",
}

function Intake( {foodIntake , removeFood } ) {

    const [dailyInfo, setDailyInfo] = useState(defaultInfo);

    const renderFoodBubbles = foodIntake.map(food => {
        return <FoodBubbleDetail key={food.fdcId} food={food} removeFood={removeFood} />
    })

    // Iterate through each food in foodIntake and sum up the nutritional data
    // foodIntake.forEach(food => {
    //     setDailyInfo({
    //         ...dailyInfo, 
           
    //     })
    // })

    return (
        <div id="intake-container">
            <h1>These are what I ate today:</h1>
            <div id="food-intake" className="intake-part">
                {renderFoodBubbles} 

                <table id="health-table" className="intake-part">
                    
                    <tbody>
                        <caption style={{fontSize: "22px"}}>Food Summary</caption>
                        <tr>
                            <td>Total Calories</td>
                            <td>data</td>
                        </tr>
                        <tr>
                            <td>Total Protein</td>
                            <td>data</td>
                        </tr>
                        <tr>
                            <td>Total Sugar</td>
                            <td>data</td>
                        </tr>
                        <tr>
                            <td>Total Carbohydrates</td>
                            <td>data</td>
                        </tr>
                        <tr>
                            <td>Total Fat</td>
                            <td>data</td>
                        </tr>
                    </tbody>
                </table> 
            </div>

        </div>
    )
}

export default Intake;