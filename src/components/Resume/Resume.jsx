import React from 'react'
import '../../styles/Resume.css'
import ResumeHeader from './ResumeHeader';
import EducationSection from '../Education/EducationSection';

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
            <EducationSection
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