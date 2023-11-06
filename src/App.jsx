import { useState } from 'react'
import './styles/App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Resume from './components/Resume/Resume'
import Personal from './components/Personal/Personal'
import exampleData from '../example-data'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  return (
    <div className="app">
      <Sidebar/>
      <Personal
        onChange={handlePersonalInfoChange}
        name={personalInfo.name}
        email={personalInfo.email}
        phone={personalInfo.phone}
        address={personalInfo.address}
      />
      <Resume
        personalInfo={personalInfo}
      />
    </div>
  )
}

export default App
