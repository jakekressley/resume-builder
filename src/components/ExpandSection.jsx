import '@fortawesome/fontawesome-free/css/all.css';

export default function ExpandSection({isOpen, setOpen, sectionTitle, iconName}) {
    return (
        <button 
            className="expand-section"
            onClick={() => setOpen(isOpen ? "" : sectionTitle)}
        >
            <h2 className="expand-section-header">
                <i className={iconName}/>
                {sectionTitle}
            </h2>
            <i className={`fa-solid fa-chevron-up chevron ${isOpen ? "open" : ""}`} />
        </button>
    );
}