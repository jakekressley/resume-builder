import React from 'react'
import './Resume.css'
import ResumeHeader from './ResumeHeader';
import ResumeBody from './ResumeBody';

export default function Resume({ personalInfo }) {
    return(
        <div className="resume">
            <ResumeHeader
                name={personalInfo.name}
                email={personalInfo.email}
                phone={personalInfo.phone}
                address={personalInfo.address}
                className="resume-header"
            />
            <ResumeBody/>
        </div>
    );
}