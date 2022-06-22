import React from "react";
import "../styles/header.css";
import FoodCard from "./FoodCard";
import MiniFoodCard from "./MiniFoodCard";

function Header( {foodToAddToUserProfile}) {
    return (
        <div className="header" >
            <div className="row">
                {foodToAddToUserProfile.map((food,index)=>{
                    return <MiniFoodCard key={food['nix_item_id']+food["tag_id"]+food['tag_name']+index} food = {food}/>
})}
            </div>

            <form id="submit-food">
                <button className="item-button" type="submit">Add to My Intake</button>
            </form>
        </div>
    )
}

export default Header;