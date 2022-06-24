import React from "react";
import Info from "./Info";

import { Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import "../styles/profile.css"

function Profile(  ) {


    const match = useRouteMatch();

    return (
        <div>
            <ul className="profile-buttons">
                <li>
                    <NavLink to={`${match.url}/history`} >View My Food History</NavLink>
                </li>
                <li>
                    <NavLink to={`${match.url}/intake`} >View my Daily Intake</NavLink>
                </li>
            </ul>

            {/* <Info /> */}
        </div>

    )
}

export default Profile