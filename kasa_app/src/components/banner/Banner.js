import React from 'react'
import '../banner/banner.css'


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
    else{
        return(
            <div className='bannerAboutUs' >
            <div className='bannerContainer'>
            </div>
            </div> 
        )
    }
 
}

export default Banner