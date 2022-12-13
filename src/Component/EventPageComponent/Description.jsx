import React from 'react'
import './Description.css'
const Description = () => {
  return (
    <div className='description-container'>
        <div className='description-upperBox'>
            <div className='description-convener'>
                <h4>Convener</h4>
                <h3>Sanidhya Kumar</h3>
            </div>
            <div className='description-event-time'>
                <div className='description-event-time-card'>Jan 6,2023 (9:00 AM)</div>
            </div>
            <div className='description-co-convener'>
                <h4>Co-Convener</h4>
                <h3>Parth Chandravadiya</h3>
            </div>
        </div>
        <div className='description-lowerBox'> 
        <div className='description-lowerBox-detail'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates? Dolorum sequi, alias impedit corporis doloremque ex molestias, earum nisi, expedita ab consectetur! Cum sint, eos qui vero nemo dignissimos beatae aut aliquid aspernatur non! Sequi laborum facilis officiis maxime lorem50</div>
        </div>

    </div>
  )
}

export default Description