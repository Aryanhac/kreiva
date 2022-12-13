import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo.png'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <img className='navbar-logo' src={logo} alt="logo.png" />
      <div className='navbar-box'>
        <div> <a href="/">Home</a></div> 
        <div> <a href="/Events">Events</a></div> 
        <div> <a href="/Timeline">Timeline</a></div> 
        <div> <a href="/Team">Team</a></div> 
        <div> <a href="/Initiatives">Initiatives</a></div> 
        <div> <a href="/Sponsors">Sponsors</a></div> 
      </div>
    </div>
  )
}

export default Navbar