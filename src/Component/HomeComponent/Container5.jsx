import React, {useRef} from 'react'
import './Container5.css'
import container5bg from '../../Images/Container5bg (2).png'
import container5clip from '../../Images/container5Clip.png'
import container5cam from '../../Images/container5cam.png'
import arrowRight from '../../Images/arrowRight.png'
import arrowLeft from '../../Images/arrowLeft.png'
const Container5 = () => {
  const box = useRef();
  const prev = ()=>{
    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft - width;
  };
  const next = ()=>{
    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft + width;
  };
  return (
    <div ref={box} className='home-container5'>
        
        <div className='home-container5-box1'>PAST YEAR GLIMPSES</div>
        <div  className='home-container5-box2'>
          <div className='home-container5-box2-box'>
               <img src="" alt="" />
          </div>
          <div className='home-container5-box2-box'>
               <img src="" alt="" />
          </div>
          <div className='home-container5-box2-box'>
               <img src="" alt="" />
          </div>
          <div className='home-container5-box2-box'>
               <img src="" alt="" />
          </div>
          <div className='home-container5-box2-box'>
               <img src="" alt="" />
          </div>
        </div>
        <div  className='home-container5-box3'>
          <button onClick={prev}><img src={arrowLeft} alt="arrowLeft" /></button>
          <button onClick={next}><img src={arrowRight} alt="arrowRight" /></button>
        </div>
        <img  className='home-container5-box4' src={container5clip} alt="clip" />
        <img  className='home-container5-box5' src={container5cam} alt="camera" />
        <img className='home-container5-box6'  src={container5bg} alt="bg" />
    </div>
  )
}

export default Container5