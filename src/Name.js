import React, {useState} from "react";
import './Name.css';

const Name = ({ onClick }) => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const disable = player1 && player2 ? false : true;

    return (
        <div className="nameTile">
            <div className="nameTile1">
                <div className="nameForm">
                   <div className="form">
                        <div className="playerForm">
                            <label className="label">
                                Enter Player 1 name: 
                                <div style={{ padding: "10px 20px" }}>
                                    <input className="textArea" name="player1" value={player1} type="text" onChange={(e) => setPlayer1(e.target.value)}></input>
                                </div>
                            </label>
                        </div>
                        <div className="playerForm">
                            <label className="label">
                                Enter Player 2 name: 
                                <div style={{ padding: "10px 20px" }}>
                                    <input className="textArea" name="player2" value={player2} type="text" onChange={(e) => setPlayer2(e.target.value)}></input>
                                </div>
                            </label>
                        </div>
                   </div>
                   <div className="ButtonTile">
                        <button disabled={disable} onClick={e => onClick(player1, player2)}>
                            <div className="smallCircle">OK</div>
                        </button>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Name;