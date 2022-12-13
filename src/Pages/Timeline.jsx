import React from 'react'
import UpperFrame from '../Component/TimeLineComponent/UpperFrame'
import Ticket from '../Component/TimeLineComponent/Ticket'
import './Timeline.css'
import { TimelineData } from '../Data/TimelineData'
const Timeline = () => {
  return (
    <div className='timeline-container'>
      <div className='upperframe-section'>
        <UpperFrame></UpperFrame>
      </div>
      <div className='ticket-section'>
        {
          (TimelineData&&TimelineData.length>0)?
          TimelineData.map((item,index)=>{
            return <Ticket info={item} key={index}></Ticket>
          })
          :<div></div>
        }
      </div>
    </div>
  )
}

export default Timeline