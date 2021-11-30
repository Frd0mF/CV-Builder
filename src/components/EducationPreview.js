export default function EducationPreview ({educationInfo}) {
    const educationPreview = educationInfo.map((element, index) => {
        return(
        <div className="right-side education" key={index}>
                  <h1>{educationInfo[index].studyProgram}</h1>
                  <h3>{educationInfo[index].institution}</h3>
                  <p>{educationInfo[index].startDate}{educationInfo[index].startDate && " - "}{educationInfo[index].endDate}</p>
          </div>
          )})
    return (
        educationPreview
    )
}