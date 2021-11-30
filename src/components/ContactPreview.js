import { MdEmail, MdPhoneIphone, MdLocationOn } from "react-icons/md";
export default function ContactPreview ({personalInfo}){
    return(
            <div className="contact">
                <MdEmail className="contact-icon"/>
                <p>{personalInfo.email}</p>
                <MdPhoneIphone className="contact-icon"/>
                <p>{personalInfo.phoneNumber}</p>
                <MdLocationOn className="contact-icon"/>
                <p>{personalInfo.adress}</p>
            </div>
    )

}