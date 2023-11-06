import '@fortawesome/fontawesome-free/css/all.css';

export default function ResumeHeader({ name, email, phone, address }) {
    return(
        <div className="resume-header">
            <h1>{name}</h1>
            <div className="extra-info">
                <div className="info-item">
                    <i className="fa-regular fa-envelope"></i>
                    <span>{email}</span>
                </div>
                <div className="info-item">
                    <i className="fa-solid fa-phone"></i>
                    <span>{phone}</span>
                </div>
                <div className="info-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{address}</span>
                </div>
            </div>
        </div>
    )
}