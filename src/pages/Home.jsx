import React, {useContext,useState} from 'react'
import {Context} from '../statemanagement/ContextApi'
import Search from '../components/Searchcomponent'
import Playlist from '../components/Playlistcomponent'
import Audio from '../components/Audio'
import Shortcuts from '../components/Shortcuts'
import '../App.css'



const Home = () => {
  const {artists} = useContext(Context)
  const {searchTerm} = useContext(Context)
  const {album} = useContext(Context)
   const{preview_url, setPreview_url}=useContext(Context)

   
    // const audioElement = new Audio(preview_url)


  return (
    <>
    <div className='home'>
    <div >
    <Search/>
    <div className=' home-search'>
    <ul>
      {artists.map((artist)=>{
        return(
          <li key={artist.id}>
          <img src={artist.images[0].url}alt="" />
          <h1 >{artist.name}</h1>
          </li>
        )
      })}
    </ul>
      </div>
      <div className='container'>

      <div className='hero-section'>
      <p>What's hot</p>
      <div className='trend-header'>

        <h2>
          Trending
        </h2>
        <p>More</p>
      </div>
      <div className='hero'>
        <p>Artist</p>
        <h2>On Top</h2>
        <h2>Of the world</h2>
        <div className='hero-btn'>
          <button className='btn1'>PLAY</button>
          <button className='btn2'>FOLLOW</button>
        </div>
      </div>
      </div>
      <div>
      <Playlist/>
      <Audio/>
      </div>
      </div>
      </div>
      <Shortcuts/>
      </div>
    </>
  )
}

export default Home