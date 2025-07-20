import React from "react";
import { Link, NavLink } from "react-router";
import { ThemeContext } from "./Layer";

function Header() {

    const { theme, toggleTheme } = React.useContext(ThemeContext)
    console.log(theme)
    return (


        <header className={`host-page ${theme}`}>
            <Link className="home" to="/">Home</Link>
            <nav className="nav-links">
                <NavLink to="about">About</NavLink>
                <NavLink to="shop">Shop</NavLink>
                <NavLink to="support">Support</NavLink>
            </nav>
            <div className="theme">
                <button className={`btn ${theme}`} onClick={toggleTheme}>{theme}</button>
            </div>
        </header>

    )
}

export default React.memo(Header)