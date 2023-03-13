import React from 'react'
import {Routes, Route} from 'react-router-dom'
import '../App.css'
import userimg from '../assets/userimg.webp'
import { FaBars } from "react-icons/fa";
import Home from '../pages/Home'
import Trend from '../pages/Trend'
import Feed from '../pages/Feed'
import NewNotable from '../pages/NewNotable'
import ReleaseCalender from '../pages/ReleaseCalender'
import FavoriteSong from '../pages/FavoriteSong'
import Artist from '../pages/Artist'
import Event from '../pages/Event'
import Albums from '../pages/Albums'
import Content from '../Navlinks';
import Audio from './Audio';




const Sidebar = () => {
  return (
    <>
    <div className='content-sidebar'>
    <Content/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='trend' element={<Trend/>}></Route>
    <Route path='feed' element={<Feed/>}></Route>
    <Route path='newNotable' element={<NewNotable/>}></Route>
    <Route path='releaseCalender' element={<ReleaseCalender/>}></Route>
    <Route path='event' element={<Event/>}></Route>
    <Route path='favoriteSong' element={<FavoriteSong/>}></Route>
    <Route path='artist' element={<Artist/>}></Route>
    <Route path='albums' element={<Albums/>}></Route>
    </Routes>
    </div>
    </>
  )
}

export default Sidebar