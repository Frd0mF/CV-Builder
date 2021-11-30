import { BsCheckSquare } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function ProfessionalExperiencePreview ({professionalExperience}) {
    function NewlineText(props) {
        const text = props.text
        const newText = text.split('\n').map(str => 
            <div className="task">
                <IconContext.Provider value={{ className: "tasks-icon" }}>
                    <BsCheckSquare /> 
                </IconContext.Provider>
            <h3>{str}</h3>
            </div>
        )
        return newText
        
      }
    const experiencePreview = professionalExperience.map((element, index) => {
        return(
        <div className="right-side education" key={index}>
                  <h1>{professionalExperience[index].position}</h1>
                  <h3>{professionalExperience[index].company}</h3>
                  <p>{professionalExperience[index].startDate}{professionalExperience[index].startDate && " - "}{professionalExperience[index].endDate}</p>
                  <div className="tasks">
                    {professionalExperience[index].tasks !== "" && <NewlineText text={professionalExperience[index].tasks} />}
                
                  </div>
                 
          </div>
          )})
    return (
        experiencePreview
    )
}