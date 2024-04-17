import React from "react";
import logo from "../components/images/logo.png";
import {Link} from "react-router-dom";
function Navbar(){
return (<div className='Navbar'>
      <img  className="logo " src={logo} alt=""/>
      <span className='head'><Link to="/">Home</Link></span>
      <span className='head'><a href="#about">About</a></span>
      <span className='head'><a href="#services">Services</a></span>
      <span className='head'><Link to="/book">Book Appointment</Link></span>
      <span className='head'><a href="#reviews">Reviews</a></span>
      </div>)}

export default Navbar;