import React from "react";
import SponsorsCard from '../Component/SponsorsComponent/SponsorsCard'
import './Sponsors.css'
import chingari from '../Images/chingari-app-logo 1.png'
const Sponsors=()=>{
    return(
        <div className="SponsorsFrame">
            <SponsorsCard add={chingari}></SponsorsCard>
        </div>
    )
}
export default Sponsors