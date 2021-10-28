import React, {useState} from 'react';
import styled from "styled-components";
import Board from './components/Board';
import LogsContainer from './components/LogsContainer';
import HistoryContext from './context/HistoryContext'
import { ContextType } from './types';
import {isWinner} from './utils/utils';

const Game = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
`
const defaultContextValues: ContextType = {
  history: [   
    [[0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]]
  ],
  board: [[0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]],
  current: 0,
  win: false,
  handleGoToBoard: ()=>{},
  handleMark: ()=>{},
}


const App = () => {

  const [board, setBoard] = useState(defaultContextValues.board)
  const [history, setHistory] = useState(defaultContextValues.history)
  const [current, setCurrent] = useState(defaultContextValues.current)
  const [win, setWin] = useState(defaultContextValues.win)


  const handleGoToBoard = (index: number) =>{

    if(index < current){
      setWin(false);
    }
    if(index === history.length-1)
    {
      setWin(isWinner(history[index]))
    }

    setBoard(history[index]);
    setCurrent(index);
  }

  const handleMark = async (l: number, c:number) => {
    if(win){
      return;
    }
    //console.log(history)
    if (board[l][c] !== 0){
      throw new Error("disable this button");
    }
    else {

      let cur = current;
      let hist = history;


      if (hist.length !== cur + 1){
        hist = hist.slice(0, cur + 1 )
      }
      
      
      let new_board =  board.map((l) => {return [...l] })
      new_board[l][c] = cur + 1;

      setWin(isWinner(new_board));

      setCurrent(cur + 1);
      setBoard( new_board );
      setHistory ( [...hist, new_board]);  

    }
  }

  return (
        <Game>
          <HistoryContext.Provider value= {{board, history, current, win, handleGoToBoard, handleMark}} >
            <Board />
            <LogsContainer />
          </HistoryContext.Provider>
        </Game>
  );
}

export default App;
