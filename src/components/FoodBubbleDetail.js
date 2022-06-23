import React, { useState } from "react";
import "../styles/FoodBubble.css";

function FoodBubbleDetail({ food , removeFood }) {

    const [quantity , setQuantity] = useState(food.quantity)

    if (food.quantity === undefined) {
        setQuantity(1)
        food.quantity = quantity
        food.id = food.fdcId
    } 
    else {
        food.quantity = quantity
    }

    function handleClick(e) {
        e.stopPropagation()
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

    function handleIncrement(e) {
        e.stopPropagation();
        setQuantity(quantity => quantity + 1)
    }

    function handleDecrement(e) {
        e.stopPropagation();
        if (quantity > 1) {
            setQuantity(quantity => quantity - 1)
        }
    }

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
            <div id="card-header">
                <h4>{food.description}</h4>
                <div className="container">
                    <button onClick={handleIncrement} >
                        ∆
                    </button>
                    <div id="total-count">
                        {quantity}
                    </div>
                    <button onClick={handleDecrement}>
                        ∇
                    </button>
                </div>
            </div>
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