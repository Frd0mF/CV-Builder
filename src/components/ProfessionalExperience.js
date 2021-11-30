export default function ProfessionalExperience ({professionalExperience, seteProfessionalExperience}) {

  let profesionnalExperienceChangeHandler = (index,e) => {
        let newFormValues = [...professionalExperience]
        newFormValues[index][e.target.name] = e.target.value
        seteProfessionalExperience(newFormValues)
    }

   
    let removeProfesionnalExperienceFields = (i) => {
        let newFormValues = [...professionalExperience];
        newFormValues.splice(i, 1);
        seteProfessionalExperience(newFormValues)
        }

    const experience = professionalExperience.map((element, index) => {
    return (
        <div className="info">
        <input type="text" name="position" placeholder="Title/Position" className="personal-info" onChange={(e)=>profesionnalExperienceChangeHandler(index,e)} value={element.position}></input>
        <input type="text" name="company" placeholder="Workplace/Company" className="personal-info" onChange={(e)=>profesionnalExperienceChangeHandler(index,e)} value={element.company}></input>
        <input type="text" name="startDate" placeholder="Start date" className="personal-info" onChange={(e)=>profesionnalExperienceChangeHandler(index,e)} value={element.startDate}></input>
        <input type="text" name="endDate" placeholder="End date" className="personal-info"onChange={(e)=>profesionnalExperienceChangeHandler(index,e)} value={element.endDate}></input>
        <textarea name="tasks" placeholder="Tasks" className="personal-info description"onChange={(e)=>profesionnalExperienceChangeHandler(index,e)} value={element.tasks}></textarea>
        {
                index ? 
                  <button type="button"  className="remove-btn" onClick={() => removeProfesionnalExperienceFields(index)}>Remove</button> 
                : null
              }
        </div>
    )})

    return (experience)
}