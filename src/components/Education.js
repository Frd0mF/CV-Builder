import React from 'react'

export default function Education ({educationInfo, seteEucationInfo}) {

    let educationInfoChangeHandler = (index,e) => {
        let newFormValues = [...educationInfo]
        newFormValues[index][e.target.name] = e.target.value
        seteEucationInfo(newFormValues)
    }

   
    let removeEducationFields = (i) => {
        let newFormValues = [...educationInfo];
        newFormValues.splice(i, 1);
        seteEucationInfo(newFormValues)
        }



 const education = educationInfo.map((element, index) => {
        return(
        <div className="info" key={index}>
                    <input type="text" name="studyProgram" placeholder="Study program" className="personal-info" onChange={(e)=>educationInfoChangeHandler(index,e)} value={element.studyProgram}></input>
                    <input type="text" name="institution" placeholder="Institution" className="personal-info" onChange={(e)=>educationInfoChangeHandler(index,e)} value={element.institution}></input>
                    <input type="text" name="startDate" placeholder="Start date" className="personal-info" onChange={(e)=>educationInfoChangeHandler(index,e)} value={element.startDate}></input>
                    <input type="text" name="endDate" placeholder="End date" className="personal-info" onChange={(e)=>educationInfoChangeHandler(index,e)} value={element.endDate}></input>
                    {
                index ? 
                  <button type="button"  className="remove-btn" onClick={() => removeEducationFields(index)}>Remove</button> 
                : null
              }
          </div>
          )})

return (education)

}