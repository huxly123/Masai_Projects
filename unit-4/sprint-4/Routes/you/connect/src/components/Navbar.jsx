import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar bg-dark container">
<h4><Link to="/">Home</Link></h4>
<h4><Link to="/notes">Notes</Link></h4>
<h4><Link to="/create">Create notes</Link></h4>
        </nav>
    )
}

export default Navbar
