import React, { useState } from 'react'
import Arrow from "./../../Images/Arrow.svg";
import "./Sidebar.css"

const Links = [
    {
        to: "/",
        title: "WEB DEV",
    },
    {
        to: "/",
        title: "DESIGN",
    },
    {
        to: "/",
        title: "SPONSERSHIP",
    },
    {
        to: "/",
        title: "MARKETING",
    },
    {
        to: "/",
        title: "ON GROUND",
    },
    {
        to: "/",
        title: "CORE SUPPORT",
        
    },
    {
        to: "/",
        title: "VIDEO",
        
    },
];
const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                {
                    Links.map((link, idx) => {

                        if (idx !== activeTab) {
                            return (
                                <div key={idx} className="sidebar__wrapper--inactive" onClick={() => { setActiveTab(idx) }}>
                                    <div className="title">
                                        <a href={link.to} onClick={(e)=>{e.preventDefault()}}>
                                            {link.title}
                                        </a>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div key={idx} className="sidebar__wrapper--active">
                                <div className="title">
                                    <a href={link.to} onClick={(e)=>{e.preventDefault()}}>
                                        {link.title}
                                    </a>
                                </div>
                                <div><img src={Arrow} alt="Active Tab" /></div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar