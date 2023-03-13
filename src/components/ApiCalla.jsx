import React, {useContext,useEffect, useState} from 'react'
import{Context} from '../statemanagement/ContextApi'

const ApiCalla = () => {
    const {accessToken} = useContext(Context)
    const {playlist, setPlaylist} = useContext(Context)
    const {userId, setUserId} = useContext(Context)
    const {allTracks, setAllTracks} = useContext(Context)
    const [items , setItems] = useState ([])


    useEffect(()=>{
        let userParameters = {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
            }
        }
        fetch('https://api.spotify.com/v1/me',userParameters)
        .then(res => res.json())
        .then(data => setUserId(data.id))
    },[accessToken])
    
    
    useEffect(()=>{

            let playlistParameters = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
            fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DWUf3j9Rl2IUG?additional_types=track' ,playlistParameters)
            .then(res => res.json())
            .then(data => setPlaylist(data))
    },[accessToken])
    

     useEffect(()=>{
        let trackParameters = {
            method: 'GET',
            headers : {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application.json'
            }
        }
        fetch(` https://api.spotify.com/v1/playlists/${playlist.id}/tracks?types=track&fields=items(track(name,href,id,track_number,type,preview_url
,duration_ms,artists(name),album(name,uri,images)))` , trackParameters)
        .then(res => res.json())
        .then(data => setAllTracks(data.items))
    },[playlist])
}

export default ApiCalla