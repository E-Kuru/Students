import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header>
            <nav>
                <Link to='/'><p>All Students</p></Link>
                <Link to='/studentsAdd'><p>Add Students</p></Link>
            </nav>
        </header>
    )
}

export default Nav