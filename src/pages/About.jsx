import { Link } from "react-router"
export default function About() {
    return (
        <div className="about-container">
            <img src="src\assets\about-img.png" className="aboutImg" />
            <div className="aboutText">
                <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)

                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="about-page-cta">
                    <h3>Your destination is waiting.<br />Your van is ready.</h3>
                    <Link className="aboutBtn" to="/van">Explore our vans</Link>
                </div>
            </div>


        </div>
    )
}