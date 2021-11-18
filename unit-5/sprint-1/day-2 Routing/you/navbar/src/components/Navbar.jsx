import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css"

function Navbar() {
    return (
      <div className={styles.navbody}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about-us">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/login">Login</Link>
      </div>
    );
}

export default Navbar
