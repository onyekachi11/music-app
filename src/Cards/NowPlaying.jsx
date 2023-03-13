import React, {useContext} from 'react'
import { Context } from '../statemanagement/ContextApi'
import img from '../assets/playing.jpg'

const NowPlaying = () => {

    const{trackName, setTrackName}=useContext(Context)
    const{trackArtist, setArtist}=useContext(Context)
  return (
    <div className='Now-playing'>
        <div className='Now-playing-img'>
            <img src={img} alt="" />
        </div>
        <h5>
            {trackName}
        </h5>
        <p>{trackArtist}
        </p>
    </div>
  )
}

export default NowPlaying