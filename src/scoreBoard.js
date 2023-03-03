import React from "react";
import './scoreBoard.css';

const Score = ({dir, isActive, playerName, score}) => {
    return (
        <div className={`scoreBoard${dir}${isActive}`}>
            <div className="nameHolder">{playerName} : {score}</div>
        </div>
    )
}

export default Score;