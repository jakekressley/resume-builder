import { useState } from 'react'
import './styles/App.css'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume/Resume'
import Personal from './components/Personal'
import exampleData from '../example-data'
import EducationInfo from './components/Education/EducationInfo'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [educationInfo, setEducationInfo] = useState(exampleData.sections.education);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleEducationInfoChange(e) {
    const { key } = e.target.dataset;
    setEducationInfo({ ...educationInfo, [key]: e.target.value});
  }



  return (
    <div className="app">
      <Sidebar/>
      <div className="editor">
        <Personal
          onChange={handlePersonalInfoChange}
          name={personalInfo.name}
          email={personalInfo.email}
          phone={personalInfo.phone}
          address={personalInfo.address}
        />
        <EducationInfo
          onChange={handleEducationInfoChange}
          school={educationInfo.school}
          degree={educationInfo.degree}
          startDate={educationInfo.startDate}
          endDate={educationInfo.endDate}
          location={educationInfo.location}
        />
      </div>
      <Resume
        personalInfo={personalInfo}
        educationInfo={educationInfo}
      />
    </div>
  )
}

export default App
