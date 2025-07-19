import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer"
import Header from "./Header";

const ThemeContext = React.createContext()

function Layer() {

    const [theme, setTheme] = React.useState("light")

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Header />
            <Outlet />
            <Footer />
        </ThemeContext.Provider>
    )
}

export { ThemeContext }
export default React.memo(Layer)