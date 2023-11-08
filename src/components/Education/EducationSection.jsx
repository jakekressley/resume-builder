import React from 'react'
import '../../styles/Resume.css'
import '@fortawesome/fontawesome-free/css/all.css';

export default function EducationSection({ school, degree, startDate, endDate, location }) {
  return (
    <div className="resume-body">
        <div className="education">
          <h3>{school}</h3>
          <p>{degree}</p>
          <p>{startDate}</p>
          <p>{endDate}</p>
          <p>{location}</p>
        </div>
    </div>
  )
}
