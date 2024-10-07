/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Menu</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis culpa optio consequuntur soluta, quaerat saepe alias explicabo vero sed iste dignissimos, officia enim quibusdam tempora maxime, reprehenderit odio placeat neque?</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {

                    return (
                        <div onClick={() => {
                            setCategory(prev => prev === item.menu_name ? "All" : item.menu_name);
                            console.log(category)
                        }}
                            key={index} className='items'>

                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p> {item.menu_name} </p>
                        </div>
                    )

                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
