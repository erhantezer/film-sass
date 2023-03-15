import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink to="/"
                    className="nav__link"
                    style={{}}
                    >
                        Home
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/"
                    className="nav__link"
                    style={{}}
                    >
                        About Me
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/"
                    className="nav__link"
                    style={{}}
                    >
                        My Projects
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/"
                    className="nav__link"
                    style={{}}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar