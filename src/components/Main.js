import React, { forwardRef } from 'react';
import PersonalInfo from "./PersonalInfo";
import ContactPreview from "./ContactPreview";
import PersonalInfoPreview from "./PersonalInfoPreview";
import Education from "./Education";
import EducationPreview from "./EducationPreview";
import ProfessionalExperience from "./ProfessionalExperience";
import ProfessionalExperiencePreview from "./ProfessionalExperiencePreview";
import PersonalProject from "./PersonalProject";
import PersonalProjectPreview from "./PersonalProjectPreview";
import Skills from './Skills';
import SkillsPreview from './SkillsPreview';
import Languages from './Languages';
import LanguagesPreview from './LanguagesPreview';
import Intrests from './Intrests'
import IntrestsPreview from './IntrestsPreview';


export const Main = React.forwardRef((props, reference) => {

    //set state or personal information
    const [personalInfo,setPersonalInfo] = React.useState({
        firstName : "",
        lastName : "",
        title : "",
        adress : "",
        phoneNumber : "",
        email : "",
        description : ""
    })   

    // set state of education information
    const [educationInfo,seteEucationInfo] = React.useState([{
        studyProgram : "",
        institution : "",
        startDate : "",
        endDate : ""
    }])

    // add education fields
    let addEducationFields = () => {
        seteEucationInfo([...educationInfo, { 
        studyProgram : "",
        institution : "",
        startDate : "",
        endDate : "" }])
        }

    // set state of professional experience
      const [professionalExperience,seteProfessionalExperience] = React.useState([{
        position : "",
        company : "",
        startDate : "",
        endDate : "",
        tasks: ""
    }])

    // add professional experience fields
    let addProfessionalExperienceFields = () => {
        seteProfessionalExperience([...professionalExperience, { 
            position : "",
            company : "",
            startDate : "",
            endDate : "",
            tasks: ""
         }])}

     // set state of personal projetcs
     const [personalProject,setPersonalProject] = React.useState([{
        project : "",
        startDate : "",
        endDate : "",
        description: ""
    }])

    // add personal project fields
    let addPersonalProjectFields = () => {
        setPersonalProject([...personalProject, { 
            project : "",
            startDate : "",
            endDate : "",
            description: ""
         }])}

    // set state of skills
    const [skill,setSkill] = React.useState([{
        skills : ""
    }])

    //set state of languages
    const [language,setLanguage] = React.useState([{
        languages : "",
        stars: 0
    }])

    //set state of langue stars
    const [ratingValue, setRatingValue] = React.useState(0)

     // set state of skills
    const [intrest,setIntrest] = React.useState([{
        intrests : ""
    }])

    return(
        <div className="main">
            <section>
                <div className="cv-builder">
                    <h1>Personal Information</h1>
                    <PersonalInfo  personalInfo = {personalInfo} setPersonalInfo = {setPersonalInfo}/>
                    <h1>Education</h1>
                    <Education educationInfo={educationInfo} seteEucationInfo = {seteEucationInfo} />
                    <input type="button" name="addField" className="add-btn"  onClick={addEducationFields} value="ADD"></input>     
                    <h1>PROFESSIONAL EXPERIENCE</h1>
                    <ProfessionalExperience professionalExperience={professionalExperience} seteProfessionalExperience={seteProfessionalExperience}/>        
                    <input type="button" name="addField" className="add-btn"value="ADD" onClick={addProfessionalExperienceFields}></input>
                    <h1>PERSONAL PROJECTS</h1> 
                    <PersonalProject personalProject={personalProject} setPersonalProject={setPersonalProject}/>        
                    <input type="button" name="addField" className="add-btn"value="ADD" onClick={addPersonalProjectFields}></input>
                    <h1>SKILLS</h1>
                    <Skills skill={skill} setSkill={setSkill} />
                    <h1>LANGUAGES</h1>
                    <Languages language={language} setLanguage={setLanguage} />
                    <h1>INTRESTS</h1>
                    <Intrests intrest={intrest} setIntrest={setIntrest} />
                </div>
            </section>
            <section className="preview">
                <div className="cv-preview" ref={reference}>
                   <PersonalInfoPreview personalInfo = {personalInfo} />
                    <div className="details">
                        <div className="left-side">
                       <ContactPreview  personalInfo = {personalInfo}/>
                       <h3>SKILLS</h3>
                       <hr className="skills-line"></hr>
                       <SkillsPreview skill = {skill} />
                       <h3>LANGUAGES</h3>
                       <hr className="skills-line"></hr>
                       <LanguagesPreview language={language} ratingValue={ratingValue} setRatingValue={setRatingValue} />
                       <h3>INTRESTS</h3>
                       <hr className="skills-line"></hr>
                       <IntrestsPreview intrest={intrest} />
                       </div>
                        <div className="right-side">
                        <h1>EDUCATION</h1>
                        <hr className="education-line"/>
                        <EducationPreview educationInfo = {educationInfo} />
                        <br></br>
                        <h1>PROFESSIONAL EXPERIENCE</h1>
                        <hr className="education-line"/>
                        <ProfessionalExperiencePreview professionalExperience = {professionalExperience} />
                        <br></br>
                        <h1>PERSONAL PROJECTS</h1>
                        <hr className="education-line"/>
                        <PersonalProjectPreview personalProject = {personalProject} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )})