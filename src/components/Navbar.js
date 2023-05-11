import React from 'react';
// import "./Styles.scss"
import "../Styles.css"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function Navbar() {
  return (
    <nav className="navbar">

             <div className="navbar-brand">
       <img className='img' src={require('../images/Artboard 1.png')}  />
  
      </div> 
      <div className="navbar-brand">
       {/* <img className='img' src={require('../images/Artboard 1.png')}  /> */}
       <span>The <b>King</b> of Baker's</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a  className="nav-link">
     <Link to="/home">  Home </Link>  </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">  <Link to="/About">About Us </Link></a>
        </li>
        <li className="nav-item">
          <a  href="#" className="nav-link">
          <HashLink to="#Recipes">Recipes</HashLink></a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link"><HashLink to="#Contact">Start Here</HashLink></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
