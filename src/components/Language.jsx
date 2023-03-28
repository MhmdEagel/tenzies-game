import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
function Language (props) {
    const [isEnglishActive, setIsEnglishActive] = useState(true)


    function enStyle () {
        return {
            color: isEnglishActive ? "#fff" : "#ffffff83" 
        }
    }

    function idStyle () {
        return {
            color: isEnglishActive === false ? "#fff" : "#ffffff83" 
        }
    }

    const languageChange = (lang) => {
        props.setLanguage(lang)
        setIsEnglishActive(() => lang === "en" ? true : false)  
    }


    return (
        <div className="lang">
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
            <span className="en-lang" onClick={() => languageChange("en")} style={enStyle()} >EN</span><span className="id-lang" onClick={() => languageChange("id")} style={idStyle()} >ID</span>
        </div>
    )
}

export default Language