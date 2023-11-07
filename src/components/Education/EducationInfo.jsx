import React from 'react'
import '../../styles/App.css'
import '../../styles/Personal.css'
import InputGroup from '../InputGroup'
import '@fortawesome/fontawesome-free/css/all.css';

export default function EducationInfo({ onChange, school, degree, startDate, endDate, location}) {
  return (
    <div className="info-section">
        <div className="info-section-header">
            <i className="fa-solid fa-graduation-cap"></i>
            <h2>Education</h2>
        </div>
        <form className="personal-form">
            <InputGroup
                id="school"
                placeholder="Name of school"
                type="text"
                labelText="School"
                onChange={onChange}
                value={school}
                data-key="school"
            />
            <InputGroup
                id="degree"
                placeholder="Enter degree"
                type="text"
                labelText="Degree"
                onChange={onChange}
                value={degree}
                data-key="degree"
            />
            <InputGroup
                id="date"
                placeholder="Enter start date"
                type="text"
                labelText="Start Date"
                onChange={onChange}
                value={startDate}
                data-key="startDate"
            />
            <InputGroup
                id="date"
                placeholder="Enter end date"
                type="text"
                labelText="End Date"
                onChange={onChange}
                value={endDate}
                data-key="endDate"
            />
            <InputGroup
                id="location"
                placeholder="Enter location"
                type="text"
                labelText="Location"
                onChange={onChange}
                value={location}
                data-key="location"
                optional
            />
        </form>
    </div>
  )
}