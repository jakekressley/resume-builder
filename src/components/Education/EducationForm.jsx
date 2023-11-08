import React from 'react'
import '../../styles/App.css'
import '../../styles/FormSection.css'
import InputGroup from '../InputGroup'
import '@fortawesome/fontawesome-free/css/all.css';

export default function EducationForm(props) {
    const { degree, schoolName, location, startDate, endDate, id } = props.form;
    const { onChange, cancel, save, remove } = props;
  return (
    <div className="info-section"
        id={id}
        data-array-name="educations"
        onSubmit={(e) => e.preventDefault()}
      >
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