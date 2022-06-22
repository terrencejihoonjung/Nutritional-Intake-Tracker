import React from "react";
import Info from "./Info";
import { Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';

function Profile() {

    const match = useRouteMatch();
    console.log(match)

    return (
        <div>
            <ul>
                <li>
                <NavLink to={`${match.url}/history`} >View My Food History</NavLink></li>
                <li>
                <NavLink to={`${match.url}/intake`} >View my Daily Intake</NavLink>
                </li>
            </ul>

            <Info />
        </div>

    )
}

export default Profile