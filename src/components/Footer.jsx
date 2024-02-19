import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

function Footer(props) {
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
              <li>Timings</li><br />
              <li>Manage Cookies</li><br />
              <li>FAQ's</li>
            </ul>
          </div>
          <div>
            <ul style={{listStyleType:"none"}}>
              <li>Instagram</li><br />
              <li>Twitter</li><br />
              <li>Facebook</li>
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
