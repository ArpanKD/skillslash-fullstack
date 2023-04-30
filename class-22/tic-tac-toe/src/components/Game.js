import { useEffect, useState } from 'react';

const Game = () => {
    const [activePlayer, setActivePlayer] = useState('X');
    const[grid, updateGrid] =useState([]);
    const [winner, setWinner] = useState('');

    const calculateWinner = (grid) =>{
        console.log(grid);
        const crossPattren =[[0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for(var pattern = 0; pattern<crossPattren.length; pattern++){
        const firstValue = grid[crossPattren[pattern][0]];
        const secondValue = grid[crossPattren[pattern][1]];
        const thirdValue = grid[crossPattren[pattern][2]];

        if(firstValue === secondValue && secondValue ===thirdValue){
            return firstValue;
        }
      }
    }

    const makeAMove = (idx) => {
        if(grid[idx] || winner){
            return;
        }
        updateGrid((oldState) =>{
            const newState =[...oldState];
            newState[idx] =activePlayer;
            return newState;
        });
        setActivePlayer((oldState) => oldState === 'X' ? 'O' : 'X');
        // calculateWinner();
    }

    useEffect(()=>{
       setWinner(() => calculateWinner(grid));
    },[grid])

    // useEffect(()=>{
    //     console.log("Activel player got change");
    // },[activePlayer])


    return (
        <div className="game-board">
            <h2>Active Player: {activePlayer}</h2>
            <div className="board-row">
                <button className="square" onClick={()=> makeAMove(0)}>{grid[0]}</button>
                <button className="square" onClick={()=> makeAMove(1)}>{grid[1]}</button>
                <button className="square" onClick={()=> makeAMove(2)}>{grid[2]}</button>
            </div>
            <div className="board-row">
                <button className="square" onClick={()=> makeAMove(3)}>{grid[3]}</button>
                <button className="square" onClick={()=> makeAMove(4)}>{grid[4]}</button>
                <button className="square" onClick={()=> makeAMove(5)}>{grid[5]}</button>
            </div>
            <div className="board-row">
                <button className="square" onClick={()=> makeAMove(6)}>{grid[6]}</button>
                <button className="square" onClick={()=> makeAMove(7)}>{grid[7]}</button>
                <button className="square" onClick={()=> makeAMove(8)}>{grid[8]}</button>
            </div>
            <h2>The Winner Is Player: {winner}</h2>
        </div>
    )
}

export default Game;