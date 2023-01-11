//tik tac toe bard
import "./Board.css";

import React, { useEffect, useState } from "react";

const Board = (props) => {
    const player_X = "X"
    const player_O = "O"

    const [board, setBoard] = useState(Array(9).fill(null));
    const [currPlayer, setCurrPlayer] = useState(player_X);
    const [winningMessage, setWinningMessage] = useState(null);
    const [winningColor, setWinningColor] = useState(null);
    const [cellElement, setCellElement] = useState(null);
    const [running, setRunning] = useState(false);
    const cells = document.querySelectorAll(".cell");

    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];



     const colorWinningsCombination = (winningCombination) => {
        const color ="red";
        winningCombination.forEach((cell) => {
            document.getElementById(cell).style.setProperty('color', color)
        })    
    }

    const checkIfThereIsAWinner2 = (newBoard) => {
        let winningCombination = checkIfThereIsAWinner(newBoard);
        if(winningCombination) {
            colorWinningsCombination(winningCombination)
            setWinningMessage("THE WINNER IS " + currPlayer);
            setRunning(false);

        }
        else {
            changePlayer();
        }
    }

    const cellClicked = (index) => {

        if(!running){
            return;
        }

        // Make a copy of the array so we don't mutate the state directly
        const newArray = [...board];
        // Set the value of the second element in the array
        newArray[index] = currPlayer;
        setBoard(Object.assign([], newArray));
        checkIfThereIsAWinner2(newArray)
    };


    const changePlayer = () => {
        const nextPlayer = currPlayer === player_X ? player_O : player_X;
        setCurrPlayer(nextPlayer);
        setWinningMessage(`${nextPlayer}'s turn`);
    };

    function checkIfThereIsAWinner(newBoard){

        return winningCombinations.some(combination => {
            return (newBoard[combination[0] - 1] === currPlayer
                && newBoard[combination[1] - 1] === currPlayer
                && newBoard[combination[2] - 1] === currPlayer)
        });

    }

    function initGame() {
        setCurrPlayer(player_X);
        setWinningMessage(`${currPlayer}'s turn`);
        setRunning(true);
    }

    useEffect(() => {
        initGame();
    }, []);

    //change board synchronously with useEffect on currPlayer change


    function restartGame() {
        cells.forEach((cell) => (cell.innerText = ""));
        setBoard(Array(9).fill(null));
        initGame();
    }

    return (
        // <div className="board">
        //     <h1>WELCOME TO TIC TAC TOE GAME!</h1>
        //     <h2 id="currTurn"></h2>
        //     <div className="board" id="board">
        //         <div className="cell" id="1"></div>
        //         <div className="cell" id="2"></div>
        //         <div className="cell" id="3"></div>
        //         <div className="cell" id="4"></div>
        //         <div className="cell" id="5"></div>
        //         <div className="cell" id="6"></div>
        //         <div className="cell" id="7"></div>
        //         <div className="cell" id="8"></div>
        //         <div className="cell" id="9"></div>
        //     </div>
        // </div>
        <>
            <h1>WELCOME TO TIC TAC TOE GAME!</h1>
            <h2 id="currTurn"></h2>
            <div className="board" id="board">
                {/*<div className="cell" data-cell="1" onClick={cellClicked}></div>*/}
                {/*<div className="cell" data-cell="2" onClick={cellClicked}></div>*/}
                {/*<div className="cell" data-cell="3" onClick={cellClicked}></div>*/}
                {/*<div className="cell" data-cell="4" onClick={cellClicked}></div>*/}
                {/*<div className="cell" data-cell="5" onClick={cellClicked}></div>*/}
                {/*<div className="cell" data-cell="6" onClick={cellClicked}></div>*/}
                {/*<div className="cell" data-cell="7" onClick={cellClicked}></div>*/}
                {/*<div className="cell" data-cell="8" onClick={cellClicked}></div>*/}
                {/*<div className="cell" data-cell="9" onClick={cellClicked}></div>*/}
                {board.map((cell, index) => (<div className="cell" data-cell={index + 1} onClick={() => cellClicked(index)}>{cell}</div>))}
            </div>
            <div className="winning-message" id="winningMessage">
                <div id="winningMessageText">{winningMessage}</div>
                <button id="restartButton" onClick={restartGame}>Restart</button>
            </div>
        </>


    )

}

export default Board;