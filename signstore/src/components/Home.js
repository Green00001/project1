import React from 'react'
import {auth} from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
    <div className='home'>
      <h1>Home page</h1>
      <h3>welcome user</h3>
      <button  onClick={()=>{navigate("/Login")}}>Sign out</button>
    </div>
  )
}

export default Home
