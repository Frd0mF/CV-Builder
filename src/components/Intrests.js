export default function Intrests ({intrest, setIntrest}) {

    let intrestsChangeHandler = (index,e) => {
          let newFormValues = [...intrest]
          newFormValues[index][e.target.name] = e.target.value
          setIntrest(newFormValues)
      }
  
  
      const Intrest = intrest.map((element, index) => {
      return (
          <div className="info">
          <textarea name="intrests" placeholder="Intrests" className="personal-info description"onChange={(e)=>intrestsChangeHandler(index,e)} value={element.description}></textarea>
          </div>
      )})
  
      return (Intrest)
  }