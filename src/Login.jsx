import React, {useState, useEffect,useContext} from 'react'
import {Context} from './statemanagement/ContextApi'
import Sidebar from './components/Sidebar';
import ApiCalla from './components/ApiCalla';
import img from './assets/logo.png'


const REDIRECT_URL = 'https://music-app-mocha.vercel.app/'
const scope = 'user-read-private user-read-email playlist-read-collaborative playlist-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-playback-position user-top-read user-read-recently-played';
const CLIENT_ID = 'f06a30565b594b098046534de5d3a1cb';




const Login = ({setIsLoggedIn,isLoggedIn}) => {

  const {accessToken, setAccessToken} = useContext(Context)

useEffect(()=>{
  const getAccessToken=()=>{
    const hash = window.location.hash
    const urlParams = new URLSearchParams(hash)
    const token = urlParams.get('#access_token')
    window.localStorage.setItem('Token',token)
    token && setAccessToken(token)
    window.location.hash=""
  }
  getAccessToken()
})



  return (
    <>
    { !accessToken && isLoggedIn== false ?
      <div className='login'>
      <div>
          <img src={img}  />
      </div>
      <div className='login-btn'>
      <h1>
      Welcome to Bee Music.
      </h1>
      <a href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${scope}&response_type=token`
      } onClick={()=>{
        isLoggedIn == false && setIsLoggedIn(true)
      }}> Log In</a>
      </div>
      </div>
      :
      <div>
        <Sidebar/>
        <ApiCalla/>
      </div>
    }


    </>
  )
  }

export default Login


// {!accessToken && isLoggedIn== false ?
//         <a href={} 
        // onClick={(event)=>{
          // isLoggedIn == false && setIsLoggedIn(true)
        // }}
//         >login</a> 
//         :
//         <div>
//           <Sidebar/>
//           <ApiCalla/>
//         </div>
//       }
