export default function IntrestsPreview ({intrest}) {
    function NewlineText(props) {
        const text = props.text
        const newText = text.split('\n').map(str => 
            <p className="skill intrest">{str}</p>
        )
        return newText
        
      }
    const skillPreview = intrest.map((element, index) => {
        return(
                  <div className="skills">
                    {intrest[index].intrests !== "" && <NewlineText text={intrest[index].intrests} />}
                  </div>
          )})
    return (
        skillPreview
    )
}