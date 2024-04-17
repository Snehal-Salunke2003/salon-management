import React from "react";
import About from "./About";
import Services from "./Services";
import Review from "./Review";
import image from "../components/images/equip.jpeg";
import Footer from "./Footer";
function Home()
{
    
    return( <div>
        <section id="home" className='page1' style={{height:"1120px"}}>
          <div className='home-image'>
            <img src={image} alt="" />
            <h1>Transform Your Look, Unleash Your Beauty <br />Where Aesthetics Meet Expertise</h1>
          </div>
        </section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="reviews"><Review /></section>
        <section ><Footer /></section>
      </div>)
}

export default Home;