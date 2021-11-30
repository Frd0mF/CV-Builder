export default function PersonalInfoPreview ({personalInfo}) {
    return(
    <header className="built-header">
        <h1 className="fullName">{personalInfo.firstName} {personalInfo.lastName}</h1>
        <hr className="info-line"/>
        <p className="built-description">{personalInfo.description}</p>
    </header>
)}