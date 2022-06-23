import React from "react";

function FoodBubbleDetail({ food }) {

    const nutrientInfo = {
        Calories: "",
        Protein: "",
        Sugar: "", 
        Carbohydrates: "",
        TotalFat: "",
    };

    food.foodNutrients.forEach(nutrient => {
        switch(nutrient.nutrientName) {
            case "Energy":
                nutrientInfo["Calories"] = nutrient.value;
                break;
            case "Protein":
                nutrientInfo["Protein"] = nutrient.value;
                break;
            case "Sugars, total including NLEA":
                nutrientInfo["Sugar"] = nutrient.value;
                break;
            case "Carbohydrate, by difference":
                nutrientInfo["Carbohydrates"] = nutrient.value;
                break;
            case "Total lipid (fat)":
                nutrientInfo["TotalFat"] = nutrient.value;
                break;
        }
    });

    return (
        <div className="mini-card">
            <h4>{food.description}</h4>
            <table>
                <trtr>
                    <td>1 serving</td>
                    <td>{food.servingSize +' '+ food.servingSizeUnit}</td>
                </trtr>
                <tr>
                    <td>Calories</td>
                    <td>{nutrientInfo["Calories"]}</td>
                </tr>
                <tr>
                    <td>Protein</td>
                    <td>{nutrientInfo["Protein"]}</td>
                </tr>
                <tr>
                    <td>Sugar</td>
                    <td>{nutrientInfo["Sugar"]}</td>
                </tr>
                <tr>
                    <td>Carbohydrates</td>
                    <td>{nutrientInfo["Carbohydrates"]}</td>
                </tr>
                <tr>
                    <td>TotalFat</td>
                    <td>{nutrientInfo["TotalFat"]}</td>
                </tr>
            </table> 
        </div>
    )
}

export default FoodBubbleDetail;