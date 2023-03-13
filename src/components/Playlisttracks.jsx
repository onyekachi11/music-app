import React, {useContext} from 'react'
import { Context } from '../statemanagement/ContextApi'
import '../App.css'


const Playlisttracks = () => {
    const{allTracks} = useContext(Context)
    const{preview_url, setPreview_url}=useContext(Context)
    const{setType}=useContext(Context)
    const{setUriId}=useContext(Context)
    const{trackName, setTrackName}=useContext(Context)
    const{trackArtist, setArtist}=useContext(Context)

    


  return (
    <>
          <div>
            <div className='track-row list-head'>
              <p>#</p>
              <p>Title</p>
              <p>Artist</p>
              <p>Time</p>
            </div>
            <div className='scroll'>
              <div className='scroll-container'>
              {allTracks && allTracks.map((item,i)=>{
                return(
                  <div key={item.track.id}className='track-row' onClick={()=>{
                    setPreview_url(item.track.preview_url)
                    setType(item.track.type)
                    setUriId(item.track.id)
                    setTrackName(item.track.name)
                    setArtist(item.track.artists.map((a,b)=> a.name).join(','))
                    console.log(item.track.images.map((a,b)=> a.url))
                  }}>
                  <span className='row'>
                    {i+1}
                  </span>
                  <h4>
                    {item.track.name}
                  </h4>
                  <p>{item.track.artists.map((a,b)=> a.name).join(',')}</p>
                  <span>{(item.track.duration_ms/100000).toFixed(2)}</span>
              </div>
            )
          })}
            </div>
          </div>
          </div>
          
    </>
  )
}

export default Playlisttracks