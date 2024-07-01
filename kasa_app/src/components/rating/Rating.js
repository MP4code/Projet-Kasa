import React, { useState, useEffect } from 'react'
import starRatingA from "../../img/Vector.png"
import starRatingI from "../../img/VectorInactive.png"


const Rating = (props) => {
  const {content} = props;
  const starAtive = starRatingA;
  const starInactive = starRatingI;
  const[ star, setStar]= useState(starInactive);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    console.log(content)
    if ( content == 5) {
      setStar(starAtive)
    }
   
    
    setLoading(false);
  }, []);
  
    return loading ? (
      <div>loading...</div>
    ) :(
      <div>
      <img src={star} style={{width:'24px'}} alt="star"/>
      <img src={star} style={{width:'24px'}} alt="star"/>
      <img src={star} style={{width:'24px'}} alt="star"/>
      <img src={star} style={{width:'24px'}} alt="star"/>
      <img src={star} style={{width:'24px'}} alt="star"/>
      </div>
     )

  
}

export default Rating