export default function Skills ({skill, setSkill}) {

    let skillsChangeHandler = (index,e) => {
          let newFormValues = [...skill]
          newFormValues[index][e.target.name] = e.target.value
          setSkill(newFormValues)
      }
  
  
      const Skill = skill.map((element, index) => {
      return (
          <div className="info">
          <textarea name="skills" placeholder="Skills" className="personal-info description"onChange={(e)=>skillsChangeHandler(index,e)} value={element.description}></textarea>
          </div>
      )})
  
      return (Skill)
  }