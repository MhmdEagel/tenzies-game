import React, {useState, useEffect} from "react";
import Die from "./components/Die"
function App () {

    const [dice, setDice] = useState(generateNumbers());
    function generateNumbers() {
        const random = [];
        for(let i = 0; i < 10; i++) {
            random.push(Math.ceil(Math.random() * 6))
        }
        return random
    }

    const allDice = dice.map(item => {
        return (
        <Die 
            value = {item}
        />
        )
    })
    
    
    return (
        <main>
            <h1 className="main-title">Tenzies</h1>
            <p className="main-desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="die--container">
                {allDice}
            </div>
            <button>Roll</button>
        </main>
    )
}

export default App;