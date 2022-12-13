import React from 'react'
import './Container4.css'
import Mask1 from '../../Images/Mask1.png'
import Mask2 from '../../Images/Mask2.png'
import Mask3 from '../../Images/Mask3.png'


const Container4 = () => {
  return (
    <div className='home-container4'>
        <div className='home-container4-box1'>
            MAJOR ATTRACTIONS
        </div>
        <div className='home-container4-box2'>
            <div className='home-container4-box2-box1'></div>
            <div className='home-container4-box2-box1'><img src={Mask1} alt="mask1" /></div>
            <div  className='home-container4-box2-box2'><img src={Mask2} alt="mask2" /></div>
            <div  className='home-container4-box2-box1'><img src={Mask3} alt="mask3" /></div>
            <div  className='home-container4-box2-box1'></div>
        </div>
        <div className='home-container4-box3'>
            <hr className='line' />
            <div>DJ NIGHT</div>
            <hr className='line'/>
        </div>
        <div className='home-container4-box4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde ex hic corporis non delectus aliquam doloremque earum saepe eius, deserunt ullam. Similique hic consectetur nostrum doloremque totam unde! Modi dolor blanditiis totam fugit? Nobis, perferendis? Delectus recusandae cupiditate sit nemo ipsum voluptatibus velit, expedita magni doloribus, dolorem culpa quis.
        </div>
    </div>
  )
}

export default Container4