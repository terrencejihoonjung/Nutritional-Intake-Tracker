import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div>
        <NavLink exact to="/" >
          Home
        </NavLink>
        
        <NavLink to="/catalog" >
          Food Catalog
        </NavLink>

        <NavLink to="/profile">
          User Profile
        </NavLink>
      </div>
    );
}

export default NavBar;