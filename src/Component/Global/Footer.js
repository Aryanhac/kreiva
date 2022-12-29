import React from 'react'
import './Footer.css'
import logo from '../../Images/logo_footer.png'
import insta from '../../Images/instagram.png'
import faceb from '../../Images/Facebook.png'
import twitter from '../../Images/twitter.png'
import KREIVA from '../../Images/KREIVA_Footer.png'
import Line from '../../Images/Line 32.png'
import Line2 from '../../Images/Group 372.png'
import Line3 from '../../Images/Group 304.png'

// import rectangle from '../../Images/Rectangle 365.png'



const Footer = () => {
    return (
        <>
            <div className='Footer'>
            <div className='degin'>
             
            <img src={Line3} alt=""/>
            </div>
                <div className='footer-container'>

                    <div className='Left-container py-3'>
                        <div className='line'>
                            <div className='contain'>

                                <img src={KREIVA} alt="" />
                                <p>Indian Institute of Information Technology, Vadodara</p>

                            </div></div>

                        <img src={Line} alt="" />
                        <h2>Reach us :</h2>
                        <div className='para'>
                            <p> Cultural committee - IIIT Vadodara</p></div>

                        <div className='icon '>
                            <div className='one'>
                                <img src={insta} alt="" />


                            </div>
                            <div className='one'>
                                <img src={faceb} alt="" />
                            </div>
                            <div className='one'>
                                <img src={twitter} alt="" />
                            </div>



                        </div>

                    </div>

                    <div className='middle-container'>
                        <div className='line'>
                            <div className='contain1'>


                                <div ><img src={logo} alt="" /></div>
                                <p>Links</p>

                            </div>
                        </div>
                        {/* <hr></hr> */}
                        <img src={Line} alt="" style={{ width: '15vw', height: '2px' }} />
                        <ul>
                            <li>Home</li>
                            <li>Timeline</li>
                            <li>Team</li>
                            <li>Events</li>
                            <li>Sponsors</li>
                        </ul>
                    </div>



                    <div className='right-container'>
                        <div className='line'>
                            <div className='contain2'>
                                <p>Contact us</p>

                            </div></div>
                        <img src={Line} alt="" style={{ width: '25vw', height: '2px' }} />
                        {/* <hr></hr> */}
                        <ul>
                            <p>Email :</p>
                            <li>cultural_sec@iiitvadodara.ac.in</li>
                            <p>Phone :</p>
                            <li>+91 96654 77899</li>
                            <li>+91 96654 77899</li>

                        </ul>
                    </div>


                </div>
                




                    
                        <img src={Line2} alt="" style={{position: 'absolute',left: '2px',width: '100vw'}} />
                        <div className='footer'>

                            <p>
                            Designed by GDSC IIITV
                            </p>
                            <p>
                            Developed by Coding club
                            </p>
                        </div>
                    </div>
                
            
        </>
    )
}

export default Footer
