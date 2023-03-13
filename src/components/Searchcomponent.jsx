import React, { useState , useContext} from 'react'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import {Context} from '../statemanagement/ContextApi'
import '../App.css'

const Searchcomponent = () => {

    const {accessToken, setAccessToken} = useContext(Context)
    const {searchTerm, setSearchTerm} = useContext(Context)
    const {artists,setArtists} = useContext(Context)
    const {album,setAlbum} = useContext(Context)
    const {track,setTrack} = useContext(Context)
    
    
    const search = async (e) =>{
        // e.preventDefault()
        let searchParameter = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                'q': searchTerm,
                'type': 'artist,album,track'
            }
        }
        const {data} = await axios.get('https://api.spotify.com/v1/search', searchParameter)

        setArtists(data.artists.items)
        setAlbum(data.albums)
        setTrack(data.tracks.items)
    }
    
    return (
    <form onSubmit={(e)=>{
        e.preventDefault()
    }}>
    <div className='search'>
        <FaSearch/>
        <input type="text"  placeholder='Search for artist song and' onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button type='submit' onClick={(e)=>{
            search()
            setSearchTerm('')
            // e.preventDefault()
        }}>search</button>
    </div>
    </form>
    )
}

export default Searchcomponent