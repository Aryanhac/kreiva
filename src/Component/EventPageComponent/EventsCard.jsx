import React from 'react'
import partiEventCardImg from '../../Images/partiEventCardImg.png'
import './EventsCard.css'
const EventsCard = ({item,index}) => {
  return (
    <div className='parti-event-card'>
       <img className='parti-event-card-img' src={item} alt='Event.png'  />
    </div>
  )
}

export default EventsCard