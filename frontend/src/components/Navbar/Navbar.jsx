/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

function Navbar({setShowLogin}) {

    const [menu, setMenu] = useState("home")

    return (
        <div className='nav'>
            <Link to='/'> <img src={assets.logo} alt="" className='logo' /></Link>

            <ul className='nav-menu'>
                <Link to='/'> <li onClick={() => setMenu("home")}  className={menu==="home" ? "active" : ""}>Home</li></Link>
                <li onClick={() => setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile-App</li>
                <li onClick={() => setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>Contact Us</li>
            </ul>

            <div className="nav-right">
                <img src={assets.search_icon} alt="" />

                <div className="nav-search-icon">
                    <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
                    <div className="dot"></div>
                </div>

                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
