import { Rating } from 'react-simple-star-rating'
import { BsCircleFill, BsCircle } from "react-icons/bs";

export default function LanguagesPreview ({language,setLanguage,ratingValue,setRatingValue}) {



  function NewlineText(props) {
      const text = props.text
      const newText = text.split('\n').map(str => 
        <>
          <p className="language">{str.replace(/[0-9]/g, '').replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"")}</p>
          <Rating
            transition
            ratingValue={str.replace(/\D/g,'')}
            fullIcon={<BsCircleFill size={25} />}
            emptyIcon={<BsCircle size={25} />}
            fillColor={'#313B47'}
            />
        </>
          
      )
      return newText
      
    }


  const languagePreview = language.map((element, index) => {
      return(
                <div className="languages">
                  {language[index].languages !== "" && <NewlineText text={language[index].languages} />}
                </div>
        )})
  return (
    languagePreview
  )
}
