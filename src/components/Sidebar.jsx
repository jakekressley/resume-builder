import React from 'react'

function SidebarItem(props) {
    return (
        <>
            <img src={props.src} alt={props.itemTitle}/>
            <span>{props.itemTitle}</span>
        </>
    )
}

export default function Sidebar() {
    return (
        <>
            <SidebarItem itemTitle="Content" src="/cv.png"/>
            <SidebarItem itemTitle="Customize" src="/customize.png"/>
        </>
    )
}