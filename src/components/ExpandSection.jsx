export default function ExpandSection({isOpen, setOpen, sectionTitle, iconName}) {
    isOpen = true;
    setOpen = true;
    return (
        <button 
            className="expand-section-button"
            onClick={() => setOpen(isOpen ? "" : sectionTitle)}
        >
            <h2 className="expand-section-header">
                <i className={iconName}/>
                {sectionTitle}
            </h2>
            <i class={`fa-solid ${ {isOpen} ? fa-chevron-down : fa-chevron-open}`}></i>
        </button>
    );
}