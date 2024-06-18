import React from 'react'
import '../banner/banner.css'
import BannerHome from '../../img/Banner.jpg'

const Banner = (props) => {
    if(props.name === "home"){
        return (
            <div className='bannerHome' >
                <div className='bannerContainer'>
                <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </div> 
          )
    }
 
}

export default Banner