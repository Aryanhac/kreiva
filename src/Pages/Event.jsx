import React from 'react'
import './Event.css'
import UpperSection from '../Component/EventPageComponent/UpperSection'
import Sidebar from '../Component/EventPageComponent/Sidebar'
import Description from '../Component/EventPageComponent/Description'
import EventInstrument from '../Images/Event-instrument.png'

const Event = () => {
  return (
    <div className='container'>
      <Sidebar></Sidebar>
     <UpperSection></UpperSection>
       <div className='zig-zag'>
       <img className='instrumentImg' src={EventInstrument} alt="/instrumentImage" />
       <Description></Description>
     </div>
    </div>
  );
}

export default Event