import { BsCheckSquare } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function PersonalProjectPreview ({personalProject}) {
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
    const projectPreview = personalProject.map((element, index) => {
        return(
        <div className="right-side education" key={index}>
                  <h1>{personalProject[index].project}</h1>
                  <p>{personalProject[index].startDate}{personalProject[index].startDate && " - "}{personalProject[index].endDate}</p>
                  <div className="tasks">
                    {personalProject[index].description !== "" && <NewlineText text={personalProject[index].description} />}
                
                  </div>
                 
          </div>
          )})
    return (
        projectPreview
    )
}