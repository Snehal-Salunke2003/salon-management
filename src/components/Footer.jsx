import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
      <div className='footer'>
        <div className='container'>
          <div>
            <ul style={{listStyleType:"none"}}>
              <li><Link to="/contact">Contact Us</Link></li><br />
              <li>Terms & Conditions</li><br />
              <li>Policy</li>
            </ul>
          </div>
          <div>
            <ul style={{listStyleType:"none"}}>
              <li><Link to="/timings">Timings</Link></li><br />
              <li>Manage Cookies</li><br />
              <li>FAQ's</li>
            </ul>
          </div>
          <div>
            <ul style={{listStyleType:"none"}}>
              <li><a href="https://www.instagram.com/sl_salon_?igsh=MXdkNzQ5bG53b2Fmbw==">Instagram</a></li><br />
              <li><a href="https://youtube.com/@slsalon8123?si=M990gN-a5uOT4b3N">You Tube</a></li><br />
              <li><a href="https://www.facebook.com/shantaram.jadhav.1">Facebook</a></li>
            </ul>
          </div>
          <div style={{gridColumn:"span 3"}}>
            <p>Copyright © 2024 Transform</p>
          </div>
        </div>
      </div>
  );
}

export default Footer;
