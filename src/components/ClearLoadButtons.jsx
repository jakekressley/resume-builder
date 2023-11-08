import '../styles/ClearLoadButtons.css'

export default function ClearLoadButtons () {
    return (
        <div className="example-section">
            <button className="clear-button">
                {/* <i className="fa-solid fa-trash" style={{color: '#b91c1c'}}></i> */}
                Clear Resume
                </button>
            <button>Load Example</button>
        </div>
    );
}