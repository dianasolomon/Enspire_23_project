import React from 'react'
import { Link } from 'react-router-dom'
import sample from "../assets/bg.mp4"
import '../styles/Home.css'
function Home() {
  return (
    <>
    <video className='videoTag' autoPlay loop muted >
    <source src={sample} type='video/mp4' />
</video>
    <div className='headerContainer'>
    <div className='home'>
      
        <h1>Enspire</h1>
        <p>Igniting Entrepreneurial Excellence</p>
        <Link to="/event">
        <button>REGISTER NOW</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Home
