import React, {useContext}from 'react'
import { Context } from "../statemanagement/ContextApi"
import '../App.css'


const Audio = () => {
    const{preview_url}=useContext(Context)

  return (
    <>
    <audio controls autoPlay src={preview_url} />
    </>
  )
}

export default Audio