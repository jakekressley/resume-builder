import ExpandSection from "../ExpandSection";
import '../../styles/Section.css'
import EducationForm from "./EducationForm";
import DisplayForms from "../DisplayForms"

export default function AddEducationSection({ educations, isOpen, onChange, setOpen, onCancel, toggleCollapsed, onHide, onRemove }) {
    return(
        <div className="add-education-section section">
            <ExpandSection
                isOpen={isOpen}
                setOpen={setOpen}
                sectionTitle="Education"
                iconName="fa-solid fa=graduation-cap"
            />
            <div className={`"section-content ${isOpen ? "open" : ""}`}>
                <DisplayForms
                    forms={educations}
                    FormComponent={EducationForm}
                    onChange={onChange}
                    onCancel={onCancel}
                    onHide={onHide}
                    onRemove={onRemove}
                    toggleCollapsed={toggleCollapsed}
                    titleKey="schoolName"
                    arrayName="educations"
                />
            </div>
        </div>
    );
}