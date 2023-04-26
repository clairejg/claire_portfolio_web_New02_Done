import React from "react";

//product component begins
export const Product = (props) => {
    const { productId, productName, productPrice, productImage} = props.data;
    // return <div>{productName}</div>;
    return(

        <div className="productDisp">
                <img src={productImage} />
                <div className = "description">
                    <p> 
                        <b>{productName}</b>
                    </p>
                    {/* <b> tag make it bold. */}

                    <p> 
                        <b> $ {productPrice}</b>
                    </p>
                </div>

        </div>
    ); 
};
 