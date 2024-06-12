import React from 'react'
import Housing from "./logements.json"

const Data = () => {
  return (
    <div>
        {
           Housing.map((Housing,i)=>(
                <div key={i}>
                    <h2>{Housing.title}</h2>
                    <img src={Housing.cover} alt='kasa'/>
                    <p>{Housing.location}</p>
                    <p>{Housing.tags}</p>
                    <p>{Housing.host.name}</p>
                    <img src={Housing.host.picture}/>
                        <div className='description'>
                            <h3>Description</h3>
                            <p>{Housing.description}</p>
                        </div>
                        <div className='equipment'>
                        <h3>Équipements</h3>
                        <p>{Housing.equipments}</p>
                        </div>

                </div>
            ) )
        }
    </div>
  )
}

export default Data