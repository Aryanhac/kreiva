// import React from 'react'
import facebook from '../../Images/Facebook.png'
import instagram from '../../Images/instagram.png'
import twitter from '../../Images/twitter.png'
import star from '../../Images/Frame3.png'
import Aditya from './aa.js'
import React, { useState, useEffect } from "react";
import './Container1.css'

const Container1 = () => {
  return (
    <div className='home-container1'>
      <div className='home-container1-box1'>
        <div className='home-container1-box1-box1'></div>
        <div className='home-container1-box1-box2'>Cultural fest at IIIT Vadodara</div>
        <div className='home-container1-box1-box3'>15-16 Jan, 2023</div>
        <div  className='home-timer'><Aditya></Aditya></div>
      </div>
      <div  className='home-container1-box2'>
        <h2 className='home-container1-box2-box1'>About the fest</h2>
        <div className='home-container1-box2-box2'>
        Kreiva is the annual cultural festival of Indian Institute of Information Technology, Vadodara. Kreiva serves as a platform for students to show their talents in performing arts and aesthetic arts, where students can collaborate and team up with other students to bring out the best in them. <br></br><br></br>

        The Annual Cultural Festival of IIIT Vadodara gets its name from the Esperanto word "Kreiva", meaning "Creativity". Since its inception in 2016 as an intra-institute fest in 2016, it has consistently been a huge platform for individuals to showcase their talents. A spectacular extravaganza, Kreiva is home to expression through.
        </div>
        <div className='home-container1-box2-box3'>
            <div className='home-container1-box2-box3-box1'>
                <div className='home-container1-box2-box3-box1-box'>
                    <div className='home-container1-box2-box3-div1'>5</div>
                    <div className='home-container1-box2-box3-div2'>Live events</div>
                </div>
                <img className="home-container1-box2-box3-img"src={star} alt="star" />
                <div className='home-container1-box2-box3-box1-box'>
                    <div className='home-container1-box2-box3-div1'>21+</div>
                    <div className='home-container1-box2-box3-div2'>Events to Participate</div>
                </div>
                <img className="home-container1-box2-box3-img" src={star} alt="star" />
                <div className='home-container1-box2-box3-box1-box'>
                    <div className='home-container1-box2-box3-div1'>1.5L+</div>
                    <div className='home-container1-box2-box3-div2'>Prizes worth to win</div>
                </div>
            </div>
            <div className='home-container1-box2-box3-box2'>
                <div>STAY TUNED BY FOLLOWING US AT</div>
                <div>
                   
                        <a href="#instagram" > <img src={instagram} alt="instagram" /></a>
                  
                    
                        <a href="#facebook"><img src={facebook} alt="facebook" /></a>
                    
                    
                        <a href="#twitter"><img src={twitter} alt="twitter" /></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Container1