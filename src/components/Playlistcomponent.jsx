import React, {useContext, useEffect, useState} from 'react'
import { Context } from '../statemanagement/ContextApi'
import Playlisttracks from './Playlisttracks'
import '../App.css'





const Playlistcomponent = () => {
const {playlist} = useContext(Context)

const playlistData = {
  id: playlist.id,
  name: playlist.name,
  image: "https://i.scdn.co/image/ab67706f000000035bf424f1bd0826b920504ba6",
  description: '  Afrobeats hottest singles',
}

// console.log(playlist)

      return (
    <>
    <h2>
      My Playlist
    </h2>
    <div className='list-container' >
      <div className='list-img'>
      <img src={playlistData.image} alt="" />
      </div>
      <div className='list-details'>
        <h3>
          {playlistData.name}
        </h3>
        <p>
          {playlistData.description}
        </p>
      </div>
    </div>
    <Playlisttracks />

    </>
  )
}

export default Playlistcomponent