import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles/NavBarStyle.css';

function NavBar() {

  return (
    <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
      
        <NavLink to="/catalog" exact>
          Food Catalog
        </NavLink>
    
        <NavLink to="/profile" exact>
          User Profile
        </NavLink>
      
    </nav>
  );
}

export default NavBar;