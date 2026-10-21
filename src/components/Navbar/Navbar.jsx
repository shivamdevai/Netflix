import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navRef = useRef()

  // navbar background toggle when user scroll
  useEffect(() => {

    const handleScroll = () =>{
      if(window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark")
      } else {
        navRef.current.classList.remove("nav-dark")
      }
    }
    window.addEventListener("scroll", handleScroll)
  
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  
  const handleLogout = () => {
    logout()
  }

  return (
    <>
    <header ref={navRef} className="navbar">
       {/* Navbar links */}
      <nav className="navbar-left">
       <Link to="/"><img src={logo} alt="Netflix-logo" /></Link>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </nav>
       {/* Navbar profile */}
      <div className="navbar-right">
        <img src={search_icon} alt="search-icon" className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="bell-icon" className='icons'/>
        <div className="navbar-profile">
          <img src={profile_img} alt="profile-image" className='profile' />
          <img src={caret_icon} alt="caret-icon" />
          <div className="dropdown">
            <p onClick={handleLogout}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
      
    </header>
    </>
  )
}

export default Navbar
