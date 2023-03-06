import './App.css';
import React, {useState} from 'react';
import Square from './squares';
import Score from './scoreBoard';
import Name from './Name';
import Winner from './Winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [win, setWin] = useState(false);
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [name, setName] = useState(true);
  const [game, setGame] = useState(false);
  const [finalWinner, setFinalWinner] = useState("");
  const [isActive1, setIsActive1] = useState("Active");
  const [isActive2, setIsActive2] = useState("");
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const handleOnClickOk = (player1, player2) => {
    setName1(player1);
    setName2(player2);
    setName(false);
    setGame(true);
  }

  const handleOnClick = (i) => {
    if(!win) {
      if(squares[i] === null) {
        squares[i] = isX ? 'X' : "O";
        setIsActive1(isActive1 === "Active" ? "" : "Active");
        setIsActive2(isActive2 === "Active" ? "" : "Active");
      }
    }
    setSquares(squares);
    setIsX(!isX);
    winner();
  }

  const arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  
  const winner = () => {
    arr.map(ele => {
      if(squares[ele[0]] === squares[ele[1]] && squares[ele[0]] === squares[ele[2]] && (squares[ele[0]] === "X" || squares[ele[0]] === "O")) {
        setWin(true);
        if(isActive1 === "Active") {
          setScore1(score1 + 1);
          setSquares(Array(9).fill(null));
          setWin(false);
          if(score1 === 2) {
            setGame(false);
            setFinalWinner(name1);
          }
        } else {
          setScore2(score2 + 1);
          setSquares(Array(9).fill(null));
          setWin(false);
          if(score2 === 2) {
            setGame(false);
            setFinalWinner(name2);
          }
        }
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {name && 
          <Name onClick={handleOnClickOk}/>
        }
        {game && 
          <>
            <div className="scoreTile">
              <Score dir={"Left"} isActive={isActive1} playerName={name1} score={score1}/>
              <Score dir={"Right"} isActive={isActive2} playerName={name2} score={score2}/>
            </div>
            <div className="tile">
              <Square value={squares[0]} id="1" styleName={'smallTile1'} onClick={() => handleOnClick(0)}></Square>
              <Square value={squares[1]} id="1" styleName={'smallTile2'} onClick={() => handleOnClick(1)}></Square>
              <Square value={squares[2]} id="1" styleName={'smallTile3'} onClick={() => handleOnClick(2)}></Square>
              <Square value={squares[3]} id="1" styleName={'smallTile4'} onClick={() => handleOnClick(3)}></Square>
              <Square value={squares[4]} id="1" styleName={'smallTile5'} onClick={() => handleOnClick(4)}></Square>
              <Square value={squares[5]} id="1" styleName={'smallTile6'} onClick={() => handleOnClick(5)}></Square>
              <Square value={squares[6]} id="1" styleName={'smallTile7'} onClick={() => handleOnClick(6)}></Square>
              <Square value={squares[7]} id="1" styleName={'smallTile8'} onClick={() => handleOnClick(7)}></Square>
              <Square value={squares[8]} id="1" styleName={'smallTile9'} onClick={() => handleOnClick(8)}></Square>
            </div>
          </>
        }
        {finalWinner && 
          <Winner finalWinner={finalWinner}></Winner>
        }
      </header>
    </div>
  );
}

export default App;