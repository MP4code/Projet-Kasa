import React from 'react'

const Banner = (props) => {
    const {text}=props
    const test =()=>{
        console.log("test")
    }
  return (
    <div onClick={test}>{text}</div>
  )
}

export default Banner