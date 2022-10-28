import React from "react";
import '../styles/home.css';

function Home() {

    const listStyle = {
        padding: "12px"
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>How to Use Our Nutrition Intake Tracker</h1>
            <ul style={{display: "table", listStylePosition: "inside", margin: "0 auto"}}>
                <li style={listStyle}>
                    Use the food catalog to search for any food item and add it to your food bar! Once you are 
                    done adding food items, add them all to your food history and intake.
                </li>
                <li style={listStyle}>
                    In the user profile, there is a food history and a food intake. Your food history contains all the foods you've ever added
                    and your food intake tracks all the foods you ate on a certain day. 
                </li>
                <li style={listStyle}>
                    The foods in your food intake list contain nutritional information that will used to calculate a summary table!
                </li>
                <li style={listStyle}>
                    All the nutrition data are provided by U.S. Department of Agriculture FoodData Central.
                </li>
            </ul>

            <h3>By Terrence Jung (<a href="https://github.com/terrencejihoonjung">GitHub</a> | 
                            <a href="https://www.linkedin.com/in/terrencejung/">LinkedIn</a>) and 
                        Yifan Wu (<a href="https://github.com/Luxury-Duckling-Services">GitHub</a> | 
                            <a href="https://www.linkedin.com/in/yifan-wu-breakthrough/">LinkedIn</a>)</h3>
        </div>
    )
}

export default Home 