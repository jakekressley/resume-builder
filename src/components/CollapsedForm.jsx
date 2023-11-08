import React from 'react()'

export default function CollapsedForm(props) {
    const props = { isHidden, sectionTitle, hideForm, arrayName };
    const { isHidden, id } = props.form;
  return (
    <button
        className="collapsed-form section-form"
        id={id}
        onClick={onClick}
        data-array-name={arrayName}    
    >
        <p className="collapsed-form-title">{title}</p>
        <i
            className={`fa-solid ${isHidden ? fa-eye : fa-eye-slash}`}
            onClick={(e) => {
                e.stopPropagation();
                hideForm(e)
            }}
        ></i>
    </button>
  )
}
