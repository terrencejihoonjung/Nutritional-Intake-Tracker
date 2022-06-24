import React, { useState } from "react";
import FoodBubbleDetail from "./FoodBubbleDetail";
import "../styles/intake.css";

const defaultInfo = {
    calories: 0,
    protein: 0,
    sugar: 0,
    carbohydrates: 0,
    totalFat: 0,
}

function Intake( {foodIntake , removeFood } ) {

    // const [dailyInfo, setDailyInfo] = useState(defaultInfo);
    let dailyInfo={...defaultInfo}

    const renderFoodBubbles = foodIntake.map(food => {
        return <FoodBubbleDetail key={food.fdcId} food={food} removeFood={removeFood} />
    })

    //Iterate through each food in foodIntake and sum up the nutritional data
    foodIntake.forEach(food => {

        const filteredCalories = food.foodNutrients.filter(nutrient => {
            return nutrient.nutrientName === "Energy"
        })

        const filteredProtein = food.foodNutrients.filter(nutrient => {
            return nutrient.nutrientName === "Protein"
        })

        const filteredSugar = food.foodNutrients.filter(nutrient => {
            return nutrient.nutrientName === "Sugars, total including NLEA" 
        })

        const filteredCarbs = food.foodNutrients.filter(nutrient => {
            return nutrient.nutrientName === "Carbohydrate, by difference" 
        })

        const filteredFat = food.foodNutrients.filter(nutrient => {
            return nutrient.nutrientName === "Total lipid (fat)" 
        })

        console.log(filteredCalories, filteredProtein, filteredSugar, filteredCarbs, filteredFat);

        // setDailyInfo({
        //     ...dailyInfo, 
        //     calories: parseInt(dailyInfo.calories, 10) + filteredNutrients[0].value
        // })

        dailyInfo = {...dailyInfo, 
            protein: (parseFloat(dailyInfo.protein, 10) + 
                parseFloat(filteredProtein[0].value, 10) * 
                parseFloat(food.quantity, 10)).toFixed(2),
            totalFat: (parseFloat(dailyInfo.totalFat, 10) + 
                parseFloat(filteredFat[0].value, 10) * 
                parseFloat(food.quantity, 10)).toFixed(2),
            carbohydrates: (parseFloat(dailyInfo.carbohydrates, 10) + 
                parseFloat(filteredCarbs[0].value, 10) * 
                parseFloat(food.quantity, 10)).toFixed(2),
            calories: (parseFloat(dailyInfo.calories, 10) + 
                parseFloat(filteredCalories[0].value, 10) * 
                parseFloat(food.quantity, 10)).toFixed(2),
            sugar: (parseFloat(dailyInfo.sugar, 10) + 
            parseFloat(filteredSugar[0].value, 10) * 
            parseFloat(food.quantity, 10)).toFixed(2)}
    })

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
                            <td>{dailyInfo["calories"]}</td>
                        </tr>
                        <tr>
                            <td>Total Protein</td>
                            <td>{dailyInfo["protein"]}</td>
                        </tr>
                        <tr>
                            <td>Total Sugar</td>
                            <td>{dailyInfo["sugar"]}</td>
                        </tr>
                        <tr>
                            <td>Total Carbohydrates</td>
                            <td>{dailyInfo["carbohydrates"]}</td>
                        </tr>
                        <tr>
                            <td>Total Fat</td>
                            <td>{dailyInfo["totalFat"]}</td>
                        </tr>
                    </tbody>
                </table> 
            </div>

        </div>
    )
}

export default Intake;