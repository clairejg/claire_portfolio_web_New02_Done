import React from "react";
import  "./home.css";
// import  "./home.scss";
// import backgroundPhoto from "../pages/logos/cityWall.jpeg";
import backgroundPhoto from "../pages/logos/baybridge02.jpg";


export const Home = () => {
    // <div body>
    
    return (
        <section className="homeBox">
          
        
            <img src={backgroundPhoto} className="backgroundPhoto" alt="homeBackgroundPhoto"/> 
        
    
            <div className="homeContainer">
                <p>Home page</p>
                
             
                <div className="inputContainer">
                    <p>Reservation</p>
                    <p>Reservation</p>
                  
                    <form>
                        <div className="inputBoxes" >
                                <div className="inputBox">
                                <span className="locationInput" >Search Pick-up Location</span>
                                    <input type="text" placeholder="Enter pickup location " required/>
                                </div>
                                
                            
                                <div className="inputBox">
                                    <span className="pickUpDateInput"> Searc Pick-up Date</span>
                                        <input type="date"/>
                                </div>

                                <div className="inputBox">
                                    <span className="pickUpTimeInput"> Searc Pick-up Time</span>
                                        <input type="time"/>
                                </div>

                                
                                <div className="inputBox">
                                    <span className="dropOffDateInput"> Drop-off Date</span>
                                        <input type="date"/>
                                </div>


                                <div className="inputBox">
                                    <span className="dropOffTimeInput"> Drop-off Time</span>
                                        <input type="time"/>
                                </div>

                                <div class="submitButton">
                                    <input type="submit" value="register"></input>

                                </div>
                            </div>
                        </form>
                    </div>
                   
                </div>
               
        
        </section>
    );
}