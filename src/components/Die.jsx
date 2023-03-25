import React from "react";

function Die (props) {
    return (
        <img src={`./src/assets/${props.value}.png`} className="die--img" />

    )

}

export default Die;