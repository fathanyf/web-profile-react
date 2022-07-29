 import React, {useState} from "react";
 import {Link} from "react-router-dom"
 import "./NavHead.css";
 
const Navhead = () => {

   const [isMobile, setIsMobile] = useState(false);
    return (
      <nav className="navbar">
          <h3 className="logo">FyF</h3>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
          >
            <Link to="/" className="home">
               <li>Halaman<br/>Utama</li>
            </Link>
            <Link to="/about" className="about">
               <li>Pengalaman dan<br/>kemampuan</li>
            </Link>
            <Link to="/blog" className="blog">
               <li>Portofolio</li>
            </Link>
            <Link to="/contact" className="contact">
               <li>Kontak</li>
            </Link>
            <Link to="/en-home" className="en-home">
               <li>English<br/>(not available) </li>
            </Link>
            <Link to="/cn-home" className="cn-home">
               <li>中文 <br/>(不齐备)</li>
            </Link>
          </ul>
          <button className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (<i className="fas fa-times"></i>
            ) : (
            <i className="fas fa-bars"></i>
            )}
          </button>
      </nav>
    );
 }

 export default Navhead 