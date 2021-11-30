export default function PersonalProject ({personalProject, setPersonalProject}) {

    let profesionnalExperienceChangeHandler = (index,e) => {
          let newFormValues = [...personalProject]
          newFormValues[index][e.target.name] = e.target.value
          setPersonalProject(newFormValues)
      }
  
     
      let removeProfesionnalExperienceFields = (i) => {
          let newFormValues = [...personalProject];
          newFormValues.splice(i, 1);
          setPersonalProject(newFormValues)
          }
  
      const project = personalProject.map((element, index) => {
      return (
          <div className="info">
          <input type="text" name="project" placeholder="Project Name" className="personal-info" onChange={(e)=>profesionnalExperienceChangeHandler(index,e)} value={element.project}></input>
          <input type="text" name="startDate" placeholder="Start date" className="personal-info" onChange={(e)=>profesionnalExperienceChangeHandler(index,e)} value={element.startDate}></input>
          <input type="text" name="endDate" placeholder="End date" className="personal-info"onChange={(e)=>profesionnalExperienceChangeHandler(index,e)} value={element.endDate}></input>
          <textarea name="description" placeholder="Description" className="personal-info description"onChange={(e)=>profesionnalExperienceChangeHandler(index,e)} value={element.description}></textarea>
          {
                  index ? 
                    <button type="button"  className="remove-btn" onClick={() => removeProfesionnalExperienceFields(index)}>Remove</button> 
                  : null
                }
          </div>
      )})
  
      return (project)
  }