import React from 'react'
import './SponsorsCard.css'
const SponsorsCard=(props)=>{
    return(
        <div className='Spon'>
            <img src={props.add} className="Sponimg"></img>
        </div>
    )
}
export default SponsorsCard