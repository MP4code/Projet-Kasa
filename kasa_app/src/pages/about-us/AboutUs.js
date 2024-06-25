import React from 'react'
import "../about-us/aboutUs.css"
import Banner from '../../components/banner/Banner'
import { aboutList } from './aboutList'
import Collapse from '../../components/collapse/Collapse'


const AboutUs = () => {
  return (
    <div>
      <Banner name="bannerAboutUs"/>
      {aboutList.map(about=>(<Collapse title={about.title} content={about.content} key={about.id}/>))}
    </div>
  )
}

export default AboutUs