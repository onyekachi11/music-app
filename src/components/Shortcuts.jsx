import React from 'react'
import QuickLinks from "../Cards/QuickLinks";
import FavouriteArtist from "../Cards/FavouriteArtist";
import NowPlaying from "../Cards/NowPlaying";

const Shortcuts = () => {
  return (
    <div>
      <div className='shortcut'>
        <h3>
          Shortcuts
        </h3>
        <QuickLinks/>
        <FavouriteArtist/>
        <NowPlaying/>
      </div>
    </div>
  )
}

export default Shortcuts