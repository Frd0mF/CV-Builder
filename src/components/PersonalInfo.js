import React from 'react'

export default function PersonalInfo ({personalInfo, setPersonalInfo}) {
    
    function personalInfoChangeHandler(event) {
        const {name,value}= event.target
        setPersonalInfo(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })

    }

    return (
        <> 
        <input type="text" name="firstName" placeholder="First name" className="personal-info" onChange={personalInfoChangeHandler} value={personalInfo.firstName}></input>
        <input type="text" name="lastName" placeholder="Last name" className="personal-info" onChange={personalInfoChangeHandler} value={personalInfo.lastName}></input>
        <textarea name="description" placeholder="Description" className="personal-info description" onChange={personalInfoChangeHandler} value={personalInfo.description}></textarea>
        <input type="text" name="email" placeholder="Email" className="personal-info" onChange={personalInfoChangeHandler} value={personalInfo.email}></input>
        <input type="text" name="phoneNumber" placeholder="Phone Number" className="personal-info" onChange={personalInfoChangeHandler} value={personalInfo.phoneNumber}></input>
        <input type="text" name="adress" placeholder="Adress" className="personal-info" onChange={personalInfoChangeHandler} value={personalInfo.adress}></input>
        </>
    )
}
