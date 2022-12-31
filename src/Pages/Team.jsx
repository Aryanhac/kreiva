import React from "react";
import "./Team.css";
import Sidebar from "../Component/TeamComponent/Sidebar";
import Uppersection from "../Component/TeamComponent/Uppersection";
import parth from "../Images/image 2.png";
import Profile from "../Component/TeamComponent/Profile";
const Team = () => {
  const profileData = [
    {
      name: "Parth ",
      work: "UX/UI Lead",
      path: parth,
    },
    {
      name: "Sandhiya Kumar",
      work: "UX/UI Lead",
      path: parth,
    },
  ];
  return (
    <div className="team">
      <Sidebar></Sidebar>
      <Uppersection></Uppersection>
      <div className="outa">
        <div className="profile-card">
          <Profile data={profileData[0]}></Profile>
          <Profile data={profileData[1]}></Profile>
          <Profile data={profileData[1]}></Profile>
          <Profile data={profileData[1]}></Profile>
          <Profile data={profileData[1]}></Profile>
          <Profile data={profileData[1]}></Profile>
          
        </div>
      </div>
    </div>
  );
};
export default Team;
