import React from "react";

function FoodBubbleDetail({ food , removeFood }) {

    function handleClick() {
        console.log(food)
        removeFood(food.fdcId)
    }

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
        <div className="mini-card" onClick={handleClick}>
            <h4>{food.description}</h4>
            <table>
                <tbody>
                    { food.servingSize === undefined ? 
                        <tr>
                            <td>{food.foodMeasures[0].disseminationText}</td> 
                            <td>{food.foodMeasures[0].gramWeight + ' g'}</td> 
                        </tr> :
                        
                        <tr>
                            <td>Serving Size</td>
                            <td>{food.servingSize +' '+ food.servingSizeUnit}</td> 
                        </tr>
                    }
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
                        <td>Total Fat</td>
                        <td>{nutrientInfo["TotalFat"]}</td>
                    </tr>
                </tbody>
            </table> 
        </div>
    )
}

export default FoodBubbleDetail;