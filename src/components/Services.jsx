import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import facial from "../components/images/facial.jpg";
import haircolor from "../components/images/haircolor.jpg";
import spa1 from "../components/images/spa.jpg";
import makeup from "../components/images/makeup.jpg";
import manicure1 from "../components/images/manicure1.jpg";
import pedicure from "../components/images/pedicure.jpg";
import haircut1 from "../components/images/haircut.jpg";
import hairstyle from "../components/images/hairstyle.jpg";

function Services(props) {
  return (
    <div className='page1'>
      <section className='services' id='services'>
        <h2>Services</h2>
        <div className="slider-frame">
          <div className="slide-images">
            <img src={facial} alt="Facial Service" />
            <img src={spa1} alt="Spa Service" />
            <img src={manicure1} alt="Manicure Service" />
            <img src={pedicure} alt="Pedicure Service" />
            <img src={haircut1} alt="Haircut Service" />
            <img src={hairstyle} alt="Hairstyle Service" />
            <img src={haircolor} alt="Hair Color Service" />
            <img src={makeup} alt="Makeup Service" />
          </div>
        </div>
        <div>
          <ul style={{bottom:"500px",right:"900px"}}>
            <li>FACIAL</li>
            <li>MASSAGE</li>
            <li>MANICURE</li>
            <li>PEDICURE</li>
          </ul>
        </div>
        <div>
          <ul style={{bottom:"700px",left:"900px"}}>
            <li>HAIR CUT</li>
            <li>HAIR STYLE</li>
            <li>HAIR COLOR</li>
            <li>MAKEUP</li>
          </ul>
        </div>
        <div style={{display:"grid",justifyContent:"right"}}>
          <Link to="/book">
            <button>Book Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
