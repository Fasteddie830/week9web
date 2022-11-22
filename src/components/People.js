import React from "react";
import { Link, Outlet } from "react-router-dom";

const People = ({people}) => {
    return(
        <>
            <h2>Meet Our Staff</h2>
            <ul>
                {people.map((person) => 
                <li key={person.id}><Link to={person.id}>{person.fullName}</Link></li>)}
            </ul>
            <Outlet></Outlet>
        </>
    );
};

export default People;