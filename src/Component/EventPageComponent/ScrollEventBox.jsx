import React from 'react'
import { ArtClubData } from '../../Data/ArtClubData'
import EventsCard from './EventsCard'
import './ScrollEventBox.css'
const ScrollEventBox = () => {
  return (
    <div className='event-slide-container'>
       <button></button>
       <button></button>
         <div className='event-slide-container-box'>
            <div className='emptyContainer'></div>
            {
               ArtClubData.eventsImg&&ArtClubData.eventsImg.length>0?
               ArtClubData.eventsImg.map((item,index)=>{
                return <EventsCard item={item} index={index}></EventsCard>
               })
               :<div></div>
            }
            <div className='emptyContainer'></div>
         </div>
    </div>
  )
}

export default ScrollEventBox