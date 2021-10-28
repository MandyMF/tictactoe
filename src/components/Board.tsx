import React, {useContext} from 'react';
import Square from './Square';
import styled from 'styled-components';
import HistoryContext from '../context/HistoryContext';


const BoardTable = styled.div`
    margin-right: 40px;
`

const BoardTableRow = styled.div`
  clear: both;
  content: "";
  display: table;
`

const Board = (props: any) => {
    const {board, handleMark} = useContext(HistoryContext);

    const renderSquare = (l: number, c: number, v: number) => {
        return <Square key={(l.toString()+"-"+c.toString())} id={(l.toString()+"-"+c.toString())} line={l} col={c} onClick={handleMark} value={v}></Square>
    }

    const renderBoard = () => {
        return board.map((line, line_idx) => 
                <BoardTableRow data-testid='row' key={line_idx.toString()}>
                {
                    line.map((line_col_val, column_idx) => 
                        renderSquare(line_idx, column_idx, line_col_val)
                    )
                }
                </BoardTableRow> 
            )
    }

    return (
        <BoardTable>
            {renderBoard()}
        </BoardTable>
    )
}

export default Board;