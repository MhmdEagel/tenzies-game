import React, {useState, useEffect} from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
function App () {

    const [dice, setDice] = useState(generateNumbers());
    const [victory, setVictory] = useState(false);
    const [numberMode, setNumberMode] = useState(false);


    useEffect(() => {
        const allSame = dice.every(item => dice[0].value === item.value)
        const allHeld = dice.every(item => item.isHeld)
        if (allSame && allHeld) {
            setVictory(true)
        }
    }, [dice])


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

    function modeFlipper () {
        setNumberMode(prevState => !prevState)
    }



    function roll () {
        if(victory) {
            setDice(generateNumbers())
            setVictory(false)
        }

        else {
            setDice(die => die.map(item => item.isHeld ? item : {...item, value : Math.ceil(Math.random() * 6)}))
        }
        
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
            numberMode = {numberMode}
        />
        )
    })
    
    
    return (
        <main>
            <button className="num-btn" onClick={modeFlipper}>{numberMode ? "Dice" : "Number"}</button>
            <h1 className="main-title">Tenzies</h1>
            <p className="main-desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="die--container">
                {allDice}
            </div>
            <button className="roll-btn" onClick={roll}>{victory ? "New Game" : "Roll"}</button>
        </main>
    )
}

export default App;