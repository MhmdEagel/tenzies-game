import React from "react";

function Die (props) {
    function styles () {
        return {
            boxShadow: props.isHeld ? "0px 0px 8px 6.25px rgba(0, 128, 0, 0.747)" : "none",
        }
    }

    if(props.numberMode) {
        return (
            <div className="die--number" onClick={props.active} style={styles()}>
                <h1>{props.value}</h1>
            </div>
        )
    } else {
        return (
            <img src={`./src/assets/${props.value}.png`} className="die--img" onClick={props.active} style={styles()}  />
        )
    }
    

}

export default Die;