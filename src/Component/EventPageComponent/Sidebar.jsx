import React, { useState } from 'react'
import Arrow from "./../../Images/Arrow.svg";
import "./Sidebar.css"

const Links = [
    {
        to: "/",
        title: "LIVE EVENTS",
    },
    {
        to: "/",
        title: "DRAMA",
    },
    {
        to: "/",
        title: "ART & CRAFT",
    },
    {
        to: "/",
        title: "DANCE",
    },
    {
        to: "/",
        title: "MUSIC",
    },
    {
        to: "/",
        title: "FUN EVENTS",
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