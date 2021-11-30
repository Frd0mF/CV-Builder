export default function Languages ({language, setLanguage}) {

    let languagesChangeHandler = (index,e) => {
          let newFormValues = [...language]
          newFormValues[index][e.target.name] = e.target.value
          setLanguage(newFormValues)
      }
  
  
      const Language = language.map((element, index) => {
      return (
          <div className="info">
          <textarea name="languages" placeholder="Languages : Value" className="personal-info description"onChange={(e)=>languagesChangeHandler(index,e)} value={element.languages}></textarea>
          </div>
      )})
  
      return (Language)
  }