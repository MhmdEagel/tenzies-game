import React, {useState} from "react";
import Dice from "./components/Dice";
import Language from "./components/Language";
import Watch from "./components/Watch";

function App () {
    const [language, setLanguage] = useState("en")
    const [time, setTime] = useState(0)
    return (
        <>
            <Language 
                setLanguage={setLanguage}
            />
            <Dice 
                language={language}
                setTime ={setTime}
                time = {time}
            />
            <Watch 
                time={time}
            />
        </>
        
    )
}

export default App;