import React from "react";
import logo from "../components/images/logo.png";
import {Link} from "react-router-dom";
function Navbar(){
return (<div className='Navbar'>
      <img  className="logo " src={logo} alt=""/>
      <span className='head'><Link to="/">Home</Link></span>
      <span className='head'><Link to="/">About</Link></span>
      <span className='head'><Link to="/">Services</Link></span>
      <span className='head'><Link to="/book">Book Appointment</Link></span>
      <span className='head'><Link to="/">Reviews</Link></span>
      </div>)}

export default Navbar;