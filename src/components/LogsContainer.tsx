import React, {useContext} from 'react';
import styled from 'styled-components';
import HistoryContext from '../context/HistoryContext';
import LogButton from './LogButton';


const LogContent= styled.div`
    display: block;
`

const LogHeader= styled.h3`
    margin: 0px;
    margin-bottom: 10px;
`
const LogButtonList= styled.ol`
    margin: 0px;
`

const LogsContainer = (props: any) => {
    const {history, current, win, handleGoToBoard} = useContext(HistoryContext);

    return (
        <LogContent>
            {win ? <LogHeader data-testid="logheader"> Winner: {current % 2 === 0 ? 'O': 'X' } </LogHeader> :
            <LogHeader data-testid="logheader"> Next Player: {current % 2 === 0 ? 'X': 'O' } </LogHeader>}
            <LogButtonList>
                {history.map((value, index) => <li key={"li-" + index}><LogButton key={"btn-" + index} idx= {index} onClick={() => handleGoToBoard(index)}></LogButton></li> )}
            </LogButtonList>
        </LogContent>
       
    )
}

export default LogsContainer;