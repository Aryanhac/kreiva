import React from 'react'
import stickImg from '../../Images/stick.png'
import './Ticket.css'

const Ticket = ({info}) => {
  return (
    <div className='container'>
        <div className='clip'>
            <div className='clip-img'>
               <div className='clip-day'>
                {info.day}
               </div>
            </div>
        </div>
        <div className='timeline'>
            {(info.events&&info.events.length>0)?
                   info.events.map((item,index)=>{
                    return <div className='timelineDiv' key={index}>
                            <div className='ticket'>
                              <div className='ticket-content'>
                                <div className='ticket-content-event'>{item.event1.name}</div>
                                <div className='ticket-content-event-time'>{item.event1.time}</div>
                              </div>
                            </div>
                           <img className='stick'  src={stickImg} alt="#stick" />
                            <div className='ticket'>
                              <div className='ticket-content'>
                                <div className='ticket-content-event'>{item.event2.name}</div>
                                <div className='ticket-content-event-time'>{item.event2.time}</div>
                              </div>
                            </div>
                           </div>})
                    :<div></div>}   
        </div>
    </div>
  )
}

export default Ticket