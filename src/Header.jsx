import React from "react";
import { Link } from "react-router"
export default function Header() {

    return (
        <div className="header-box">
            <Link to="/">#VANLIVE</Link>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}