import React from "react";

import img1 from "/src/assets/categoryImg1.jpg"
import img2 from "/src/assets/categoryImg2.jpg"
import img3 from "/src/assets/categoryImg3.jpg"
import img4 from "/src/assets/categoryImg4.jpg"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Link } from "react-router";

const images = [
    { img: img1, category: "jewelery" },
    { img: img2, category: "men's clothing" },
    { img: img3, category: "electronics" },
    { img: img4, category: "women's clothing" }]


function ProductsSlider() {

    const [currentIndex, setIndex] = React.useState(0)

    function prevImg() {
        setIndex(prev => {
            return prev === 0 ? nyll : prev - 1
        })
    }
    function nextImg() {
        setIndex(prev => {
            return prev === images.length - 1 ? 0 : null
        })
    }

    return (
        <div className="category-slider">
            <div className="category-slider-display" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                {images.map((item, index) => (
                    <Link key={index} to={`/shop?category=${encodeURIComponent(item.category)}`}>
                        <img
                            className="category-image-dim"
                            src={item.img}
                            alt={`img-${index}`}
                            loading="lazy"
                        />
                    </Link>
                ))}
            </div>

            <button className="slider-arrows" onClick={prevImg} style={{ left: 0 }}><ArrowBigLeft /></button>
            <button className="slider-arrows" onClick={nextImg} style={{ right: 0 }}><ArrowBigRight /></button>

        </div>
    )

}

export default React.memo(ProductsSlider)