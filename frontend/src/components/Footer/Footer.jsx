/* eslint-disable no-unused-vars */
import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, magnam? Magni, perferendis inventore cupiditate quibusdam, distinctio autem impedit sequi numquam atque consequatur cumque! Tempore impedit cum veniam vitae numquam? Hic?</p>
            <div className="footer-icons">
                <img className='linkedin' src={assets.linkedin_icon} alt="" />
                <img className='twitter' src={assets.twitter_icon} alt="" />
                <img className='facebook' src={assets.facebook_icon} alt="" />
            </div>
        </div>
        <div className="footer-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Order</li>
                <li>Cart</li>
            </ul>
        </div>
        <div className="footer-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+91-123-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='coypright'>
            &copy; 2021 Tomato. All rights reserved
      </p>
    </div>
  )
}

export default Footer
