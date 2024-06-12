import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import AboutUs from '../pages/about-us/AboutUs'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import Logement from '../pages/logement/Logement'

const Navigation = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about-us' element={<AboutUs/>}/>
    <Route exact path='/logement' element={<Logement/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default Navigation