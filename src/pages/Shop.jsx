import React from "react";
import Products from "../blocks/Products";


function Shop() {

    return (
        <div className="shop-container">
            <h1>Shop</h1>
            <Products />
        </div>

    )
}


export default React.memo(Shop)