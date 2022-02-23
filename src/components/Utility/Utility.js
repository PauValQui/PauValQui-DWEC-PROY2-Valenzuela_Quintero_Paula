import React, { useState } from 'react'
import './Utility.css'
import Board from './components/Board/Board'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'

const winnerPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Utility = () => {
  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winnerSquares, setWinnerSquares] = useState([])
  const [score, setScore] = useState({
    X:0,
    O:0
  })

  const reset = () => {
    setTurn('X')
    setSquares(Array(9).fill(null))
    setWinnerSquares([])
  }

  const checkForWinner = newSquare =>  {
    
    for(let i =0; i< winnerPositions.length; i++){
      const[a,b,c] = winnerPositions[i];
      if(newSquare[a] && newSquare[a] === newSquare[b] && newSquare[a] === newSquare[c]){
        //si el valor a es distinto de nulo y igual a b y c, hay un ganador
        endGame(newSquare[a], winnerPositions[i])
        return
      }
    }
    if(!newSquare.includes(null)){// si en newSquare todos los cuadrados tienen un valor y no hay un ganador es un empate
      endGame(null, Array.from(Array(10).keys()))
      return
    }

    setTurn(turn === 'X' ? 'O' : 'X')// si es el turno de X cambia a = y viceversa
      
}

  const handleClick = square =>{
    let newSquare = [...squares];
    newSquare.splice(square, 1, turn) //Al square pulsado que sera la posicion modificamos un elemento y le damos el valor de turn (X o O)
    setSquares(newSquare)
    checkForWinner(newSquare)
  }

  const endGame = (result, winnerPositions) => {
    setTurn(null)
    if(result !== null){

      setScore({
        ...score,
        [result]: score[result] + 1,
      })
    }
    setWinnerSquares(winnerPositions)
    setTimeout(reset,2000);
    
  }

  return(
    <div className="container">
      <Board winnerSquares={winnerSquares} turn={turn} squares={squares} onClick={handleClick}/>
      <ScoreBoard scoreO = {score.O} scoreX={score.X} />
    </div>
    )
}

export default Utility;
