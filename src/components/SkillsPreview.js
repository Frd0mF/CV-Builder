export default function SkillsPreview ({skill}) {
    function NewlineText(props) {
        const text = props.text
        const newText = text.split('\n').map(str => 
            <p className="skill">{str}</p>
        )
        return newText
        
      }
    const skillPreview = skill.map((element, index) => {
        return(
                  <div className="skills">
                    {skill[index].skills !== "" && <NewlineText text={skill[index].skills} />}
                  </div>
          )})
    return (
        skillPreview
    )
}