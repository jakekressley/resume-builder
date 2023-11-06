export default function ResumeHeader({ name, email, phone, address }) {
    return(
        <div className="resume-header">
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>
        </div>
    )
}