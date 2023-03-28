import React, {useState} from "react";
import Dice from "./components/Dice";
import Language from "./components/Language";
function App () {
    const [language, setLanguage] = useState("en")
    return (
        <>
        <Language setLanguage={setLanguage}/>
        <Dice language={language} />
        </>
        
    )
}

export default App;