import React, {useState, useEffect} from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
function App () {

    const [dice, setDice] = useState(generateNumbers());
    function generateNumbers() {
        const number = [];
        for(let i = 0; i < 10; i++) {
            number.push({
                value : Math.ceil(Math.random() * 6),
                id : nanoid(),
                isHeld : false,
            })
        }
        return number
    }

    function roll () {
        setDice(die => die.map(item => item.isHeld ? item : {...item, value : Math.ceil(Math.random() * 6)}))
    }
    function active (id) {
        setDice(die => die.map(item => item.id === id ? {...item, isHeld: !item.isHeld} : item))
    }


    const allDice = dice.map(die => {
        return (
        <Die 
            value = {die.value}
            active = {() => active(die.id)}
            key = {die.id}
            isHeld = {die.isHeld}
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
            <button className="roll-btn" onClick={roll}>Roll</button>
        </main>
    )
}

export default App;