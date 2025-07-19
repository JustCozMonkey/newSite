import React from "react";
import Products from "../blocks/Products";


function Shop() {

    return (
        <div className="shop-container">
            <Products />
        </div>

    )
}


export default React.memo(Shop)