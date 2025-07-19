import React, { Children } from "react";
import { Outlet } from "react-router";

function MenuDropdown({ children, name }) {

    const [isDown, setIsDown] = React.useState(false)

    function toggleDown() {
        setIsDown(prev => !prev)
    }

    return (
        <div className="category-filter">
            <button className="btn" onClick={toggleDown}>{name}</button>
            {isDown && children}
        </div>
    );
}

export default React.memo(MenuDropdown)



