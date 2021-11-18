import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"

function Navbar() {
    return (
        <div className={styles.navbody}>
            <Link to="/">Home</Link>
            <Link to="/products">All products</Link>
        </div>
    )
}

export default Navbar
