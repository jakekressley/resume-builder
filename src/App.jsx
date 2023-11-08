import { useState } from 'react'
import './styles/App.css'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume/Resume'
import PersonalInfoSection from './components/PersonalInfoSection'
import exampleData from '../example-data'
import ClearLoadButtons from './components/ClearLoadButtons'
import AddEducationSection from './components/Education/AddEducationSection'

function App() {
  const [sections, setSections] = useState(exampleData.sections);
  const [sectionOpen, setSectionOpen] = useState(null);
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [educationInfo, setEducationInfo] = useState(exampleData.sections.educations);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

 // function handleEducationInfoChange(e) {
 //   const { key } = e.target.dataset;
 //   setEducationInfo({ ...educationInfo, [key]: e.target.value});
 // }

  function handleSectionChange(e) {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({... sections, [arrayName]: sections.map((obj) => {
      if (obj.id === id) obj[key] = inputValue;
      return obj;
    }),
  });
}

function toggleValue(e, key) {
  const sectionForm = e.target.closest(".section-form");
  const { id } = sectionForm;
  const { arrayName } = sectionForm.dataset;
  const section = sections[arrayName];
  setSections({
    ...sections,
    [arrayName]: section.map((form) => {
      if (form.id === id) {
        setPrevState(Object.assign({}, form));
        form[key] = !form[key];
      }

      return form;
    }),
  });
}

const setOpen = (sectionName) => setSectionOpen(sectionName);
const toggleCollapsed = (e) => toggleValue(e, "isCollapsed");
const toggleHidden = (e) => toggleValue(e, "isHidden");

function cancelForm(e) {
  // check if its the first in the array or not
  if (prevState === null) {
    removeForm(e)
    return;
  }

  const sectionForm = e.target.closest(".section-form");
  const { id } = sectionForm;
  const { arrayName } = sectionForm.dataset;
  const section = sections[arrayName];
  setSections({
    ...sections,
    [arrayName]: section.map((form) => {
      if (form.id === id) {
        // Revert back to previous state
        form = prevState;
        form.isCollapsed = true;
      }

      return form;
    }),
  });
}

function removeForm(e) {
  const form = e.target.closest(".section-form");
  const arrayName = e.dataset;
  const section = sections[arrayName];
  const { id } = form;

  setSections({... sections, [arrayName]: section.filter((item) => item.id !== id)});
}

  return (
    <div className="app">
      <Sidebar/>
      <div className="editor">
        <ClearLoadButtons/>
        <PersonalInfoSection
          onChange={handlePersonalInfoChange}
          name={personalInfo.name}
          email={personalInfo.email}
          phone={personalInfo.phone}
          address={personalInfo.address}
        />
        <AddEducationSection
          educations={sections.educations}
          isOpen={sectionOpen === "Education"}
          onChange={handleSectionChange}
          setOpen={setOpen}
          onCancel={cancelForm}
          toggleCollapsed={toggleCollapsed}
          onHide={toggleHidden}
          onRemove={removeForm}
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
