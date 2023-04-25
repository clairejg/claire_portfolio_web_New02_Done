import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar=() =>{
    return (    
    < div className="navBar">
    {/* // for styling the navBar, we do: className="navbar" */}
        <div className="links">
            {/* link components */}

            <Link to= "/"> Home </Link>
            <Link to="/portfolio"> Portfolio </Link>
            <Link to="/register"> Register</Link>
            
        </div>
    </div>



    );

};