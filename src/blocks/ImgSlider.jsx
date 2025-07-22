import React from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import img1 from "/src/assets/shop1.jpg"
import img2 from "/src/assets/shop2.jpg"
import img3 from "/src/assets/shop3.jpg"
import img4 from "/src/assets/shop4.jpg"
import img5 from "/src/assets/shop5.jpg"


const images = [
    img1, img2, img3, img4, img5
];

function ImgSlider() {

    const [currentIndex, setIndex] = React.useState(0)

    function prevImg() {
        setIndex(prev => {
            return prev === 0 ? images.length - 1 : prev - 1
        })
    }
    function nextImg() {
        setIndex(prev => {
            return prev === images.length - 1 ? 0 : prev + 1
        })
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div className="img-slider">
            <div className="slider-display" style={{ translate: `-${currentIndex * 100}%` }}>
                {images.map((src, index) => (
                    <img className="image-dim" src={src} alt={`img-${index}`} key={index} loading="lazy" />
                ))}
            </div>
            <button className="slider-arrows" onClick={prevImg} style={{ left: 0 }}><ArrowBigLeft /></button>
            <button className="slider-arrows" onClick={nextImg} style={{ right: 0 }}><ArrowBigRight /></button>
            <div className="slider-dots-box" >
                {images.map((_, index) => (
                    <button key={index} className="slider-dots" onClick={() => setIndex(index)}>{index === currentIndex ? <CircleDot /> : <Circle />}</button>
                ))}
            </div>
        </div>
    )
}

export default React.memo(ImgSlider)