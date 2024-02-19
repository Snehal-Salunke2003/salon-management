import React from "react";
import spa from "../components/images/face.png";
import haircut from "../components/images/men-haircut.jpg";
import hairwash from "../components/images/hair-wash.jpg";
import manicure from  "../components/images/manicure.jpg";

function About()
{
    return(<div className='page2' id='about' ><section className='about' ><h2>Want to know about us?</h2>
      <p>Welcome to TRANSFORM, where beauty meets sophistication. Our team of skilled stylists and professionals are dedicated to providing you with the ultimate salon experience. With a focus on quality service and personalized attention, we strive to exceed your expectations every visit. From cutting-edge haircuts to luxurious spa treatements, we offer a wide range of services to pamper and rejuvenate you. Step into our oasis of tranquility and indulge in a world of beauty and relaxation. Discover your best self at Transform.</p>
      <div className='about-image'>
      <div><img src={haircut} alt="" /></div>
      <div><img src={manicure} alt="" /></div>
      <div><img src={spa} alt="" /></div>
      <div><img src={hairwash} alt="" /></div>
      </div>
      </section></div>)
}

export default About;