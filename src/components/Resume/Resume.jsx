import React from 'react'
import '../../styles/Resume.css'
import ResumeHeader from './ResumeHeader';
import ResumeBody from './ResumeBody';

export default function Resume({ personalInfo, educationInfo }) {
    return(
        <div className="resume">
            <ResumeHeader
                name={personalInfo.name}
                email={personalInfo.email}
                phone={personalInfo.phone}
                address={personalInfo.address}
                className="resume-header"
            />
            <ResumeBody
                school={educationInfo.school}
                degree={educationInfo.degree}
                startDate={educationInfo.startDate}
                endDate={educationInfo.endDate}
                location={educationInfo.location}
                className="resume-body"
            />
        </div>
    );
}