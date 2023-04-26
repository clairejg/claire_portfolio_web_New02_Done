import React from "react";
import  "./home.css";
// import  "./home.scss";
import backgroundPhoto from "../pages/logos/cityWall.jpeg";


export const Home = () => {
    // <div body>
    
    return (
        <section className="homeBox">
            <div className="overlay"></div>
        
            <img src={backgroundPhoto} className="backgroundPhoto" alt="homeBackgroundPhoto"/> 
        
    
            <div className="homeContainer">
                <p>Home page</p>
                
             
                <div className="reservationContainer">
                    <p>Reservation</p>
                    <p>Reservation</p>
                    <p>Reservation</p>
                    <p>Reservation</p>
                    
                    
                    <div className="locationInput">
                        <h4> Search Pick-up Location</h4>
                        <input type="text" placeholder="Enter your location to find the nearest rental car office"/>
                    </div>
                

                    <div className="pickUpDate">
                         <div className="pickUpDateInput">
                            <h5> Search Pick-up Date</h5>
                            <input type="date"/>
                        </div>
                    </div>

                </div>
            
            </div>
        </section>
    );
}