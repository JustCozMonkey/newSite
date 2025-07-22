import React from "react";
import ImgSlider from "../blocks/ImgSlider";


function Home() {

    return (
        <div className="main-home">
            <ImgSlider />

        </div>

    )
}


export default React.memo(Home)