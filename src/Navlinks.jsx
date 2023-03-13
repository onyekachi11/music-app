import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
import { FaBars } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { RiCoupon3Line } from "react-icons/ri";

const Navlinks = () => {
  return (
    <nav className='nav-links'>
      <NavLink to='/'><FaHome/> Home</NavLink>
      <NavLink to='/trend'><IoTrendingUp/> Trend</NavLink>
      <NavLink to='/feed'><FaCompass/> Feed</NavLink>
      <p>Discover</p>
      <NavLink to='/newNotable'><FaBoxes/> New and Notable</NavLink>
      <NavLink to='/releaseCalender'><FaCalendarAlt/> Release Calender</NavLink>
      <NavLink to='/event'><RiCoupon3Line/> Event</NavLink>
      <div className='link-class'>

      <p>Your Collection</p>
      <NavLink to='/favoriteSong'><IoHeartOutline/>Favorite Song</NavLink>
      <NavLink to='/artist'><IoPeopleOutline/>Artist</NavLink>
      <NavLink to='/albums'><IoStarOutline/>Album</NavLink>
      </div>
    </nav>
  )
}

export default Navlinks