import React from "react";
import ImgSlider from "../blocks/ImgSlider";


function Home() {

    return (
        <div className="main-home">
            <h1>Salut</h1>
            <ImgSlider />

        </div>

    )
}


export default React.memo(Home)