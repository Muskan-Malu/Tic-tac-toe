import React, {useState} from "react";
import './Winner.css';

const Name = ({ finalWinner }) => {
    return (
        <div className="winTile">
            <div className="circle1">
                <div className="circle2">
                    <div className="largeText">Winner</div>
                    <div className="mediumText">{finalWinner}</div>
                    <div className="emoji">🥳</div>
                </div>
            </div>
        </div>
    );
}

export default Name;