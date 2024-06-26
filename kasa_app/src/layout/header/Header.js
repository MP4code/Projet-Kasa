import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"


const Header = () => {
  return (
    <header className='headerContainer'>
        <img src={require("../../img/logo.png")} alt='logo kasa'/>
        <nav>
            <Link to='/' >Accueil</Link>
            <Link to="/about-us">A Propos</Link>
        </nav>
    </header>
  )
}

export default Header