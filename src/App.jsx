import { useState } from 'react'
import Login from './Login';
import {Context} from './statemanagement/ContextApi'

import './App.css'



function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [artists,setArtists ] = useState([])
  const [album,setAlbum ] = useState([])
  const [track,setTrack ] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [userId, setUserId] = useState([])
  const [playlist, setPlaylist] = useState([])
  const [allTracks,setAllTracks]=useState([])
  const [accessToken,setAccessToken]=useState('')
  const [preview_url, setPreview_url]=useState()
  const [type, setType]=useState('')
  const [uriId, setUriId]=useState('')
  const [trackName, setTrackName]=useState('')
  const [trackArtist, setArtist]=useState('')
  

  return(
    <>
    <Context.Provider value={{artists,setArtists,album,setAlbum,track,setTrack,searchTerm, setSearchTerm, userId, setUserId, playlist, setPlaylist,allTracks,setAllTracks,accessToken,setAccessToken,preview_url, setPreview_url,type, setType,uriId, setUriId ,trackName, setTrackName,trackArtist, setArtist}}>
    {
      !isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/> 
    }
    </Context.Provider>
    </>
      
  )
}

export default App




// 