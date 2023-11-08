import CollapsedForm from "./CollapsedForm";
import '../styles/Section.css'

export default function DisplayForms({ forms, FormComponent, onChange, onCancel, onHide, onRemove, toggleCollapsed, titleKey, arrayName }) {
    return(
        <div className="display-section">
            {forms.map((form) => {
                form.isCollapsed ? (
                    <CollapsedForm
                        onClick={toggleCollapsed}
                        form={form}
                        key={form.id}
                        title={form[titleKey]}
                        arrayName={arrayName}
                        hideForm={onHide}
                    />
                ) : (
                    <FormComponent
                        onChange={onChange}
                        form={form}
                        key={form.id}
                        cancel={onCancel}
                        save={toggleCollapsed}
                        remove={onRemove}
                    />
                )
            })}
        </div>
    );
}