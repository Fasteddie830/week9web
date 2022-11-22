import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About us</Link></li>
                    <li><Link to="/Locations">Locations</Link></li>
                    <li><Link to="/DisplayFoodItems">Menu</Link></li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </>
    );
};

export default Navigation;