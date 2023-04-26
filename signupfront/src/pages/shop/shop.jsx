import React from "react";
import {PRODUCTS} from "../../products";
import { Product} from "./product";

export const Shop = () => {
    //creating component
    <div>Shop page</div>
    return( 
        <div className = "shoppage">

            <div className="shopTitle">
                <h1> Coffe Shop </h1>
            </div>


            
            <div className="productItems">
                {" "}
                {/* loop thrugh the lists of intems */}
                {PRODUCTS.map((product) =>(
                    <Product data = {product} />

                ))}

            </div>


        </div>
    );

};
