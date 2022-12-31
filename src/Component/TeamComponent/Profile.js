import React from 'react'
import './Profile.css'
const Profile=(props)=>{
    return(
        <div className='profile'>
            <img className='profile-img' src={props.data.path} alt="profile"></img>
            <div className='name'>{props.data.name}</div>
            <div className='work'>{props.data.work}</div>
        </div>
    )
}
export default Profile