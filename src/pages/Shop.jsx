import React from "react";
import Products from "../blocks/Products";
import { Outlet } from "react-router";


function Shop() {

    return (
        <div className="shop-container">
            <Outlet />
        </div>

    )
}


export default React.memo(Shop)