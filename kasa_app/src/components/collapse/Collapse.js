import React, { useState } from "react";
import "./collapse.css"
import Image from "../../img/arrow_back_ios-24px 2.png"
    

const Collapse = (props) => {
    const { title, content} = props;
    const [open , setOpen] = useState(false);
        
        return (
            <div className="collapseContainer">
                <div className="title">
                    <button onClick={()=>setOpen(!open)}>
                        <h3>{title}</h3>
                    <img src={Image} alt="arrow" className={open?"collapseButtonOpen":"collapseButtonClose"}/>
                    </button>
                </div>
                
              <section className={open?"collapseOpen":"collapseClose"}>
                { Array.isArray(content)? <div className="collapseContent"><ul>{content.map((des , i)=> (<li key={i}>{des}</li>))}</ul></div> : 
                <div className="collapseContent"><p className="description">{content}</p></div>}
              
              </section>
            </div>
        
          )
    


}

export default Collapse