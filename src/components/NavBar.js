import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div>
        <NavLink to="/" exact>
          Home
        </NavLink>
        
        <NavLink to="/catalog" exact>
          Food Catalog
        </NavLink>

        <NavLink to="/profile" exact>
          User Profile
        </NavLink>
      </div>
    );
}

export default NavBar;