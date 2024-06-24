import React from 'react'
import "../error-404/error404.css"
import Image from "../../img/404.png"
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='container'>
      <img src={Image} alt='Error 404'/>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      <Link to='/'>Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error404