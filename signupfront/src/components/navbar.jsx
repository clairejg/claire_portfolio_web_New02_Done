import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// import { ShoppingCart } from "phosphor-react";
import { Jeep } from "phosphor-react";
import { UserCircle} from "phosphor-react";
import mainLogo from "../pages/logos/rentalCar.png";


export const Navbar=() =>{
    return (    
        <section className= 'navBarSection'>
        {/* <div className="mainLogo"> */}
         
        {/* </div> */}
        {/* <div className="pageLogo"> 
        </div> */}
            < div className="navBar">
            {/* // for styling the navBar, we do: className="navbar" */}
            <img src={mainLogo} className="mainLogo" alt="rentalCar" />
                    <p className="rentalText">Rental Cars</p>
                    <div className="links">
                        {/* link components */}

                        <Link to= "/"> Home </Link>
                        <Link to="/rent"> Rent now <Jeep size={30} /> </Link>
                        <Link to="/reservation"> My Reservation <UserCircle size={30} /> </Link>
                        <Link to="/register"> Sign-up / Sign-in </Link>
                



                        
                    </div>
            </div>
        </section>


    );

};