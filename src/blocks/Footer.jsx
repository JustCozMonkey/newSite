import React from "react";


function Footer() {

    const currentYear = new Date().getFullYear();

    return (

        <footer>
            <span >Here is the footer &copy;{currentYear}</span>
        </footer>
    )

}

export default React.memo(Footer)