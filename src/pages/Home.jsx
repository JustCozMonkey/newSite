import React from "react";
import ImgSlider from "../blocks/ImgSlider";
import ProductsSlider from "../blocks/ProductsSlider";
import TopProducts from "../blocks/TopProducts";

function Home() {

    return (
        <div className="main-home">
            <ImgSlider />
            <ProductsSlider />
            <h2 >Top Products</h2>
            <TopProducts />

        </div>

    )
}


export default React.memo(Home)