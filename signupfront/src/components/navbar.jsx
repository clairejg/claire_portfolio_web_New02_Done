import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { ShoppingCart } from "phosphor-react";

export const Navbar=() =>{
    return (    
    < div className="navBar">
    {/* // for styling the navBar, we do: className="navbar" */}
        <div className="links">
            {/* link components */}

            <Link to= "/"> Home </Link>
            <Link to="/register"> Register</Link>
            <Link to="/shop"> Shop</Link>
            <Link to="/cart"> Cart <ShoppingCart size={30} /> </Link>
            



            
        </div>
    </div>



    );

};