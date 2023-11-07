import React from 'react'
import '../styles/Sidebar.css'

function SidebarItem(props) {
    return (
        <div className={props.className}>
            <img src={props.src} alt={props.itemTitle} className="sidebar-item-img" />
            <span>{props.itemTitle}</span>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <span className="sidebar-item" style={{fontWeight: 'bold'}}>Resume Builder</span>
            <SidebarItem itemTitle="Content" src="/cv.png" className="sidebar-item"/>
            <SidebarItem itemTitle="Customize" src="/customize.png" className="sidebar-item" />
        </div>
    );
}