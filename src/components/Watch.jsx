import React from "react";

function Watch (props) {
    const hours = Math.floor(props.time / 360000);
    const minutes = Math.floor((props.time % 360000) / 6000);
    const seconds = Math.floor((props.time % 6000) / 100);
    const milliseconds = props.time % 100;

    return (
        <div className="watch-container">
            <h2 className="watch-title">Time</h2>
            <p className="watch-time">
                {hours}:{minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}:
                {milliseconds.toString().padStart(2, "0")}
            </p>
        </div>
    )
}

export default Watch;