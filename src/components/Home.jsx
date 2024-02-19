import React from "react";
import image from "../components/images/equip.jpeg";
function Home()
{
    return( <div className='page1' style={{height:"1120px"}}>
        <div className='home-image'>
            <section className='home' id='home'>
                <img src={image} alt="" />
                <h1>Transform Your Look, Unleash Your Beauty <br />Where Aesthetics Meet Expertise</h1>
            </section>
        </div>
    </div>)
}

export default Home;