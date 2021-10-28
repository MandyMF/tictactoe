import {createContext} from 'react';
import {ContextType} from '../types';


const HistoryContext = createContext<ContextType>({
    history: [   
                [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]]
            ],
    board: [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]],
    current: 0,
    handleGoToBoard: ()=>{},
    handleMark: ()=>{},
    win: false,

});

export default HistoryContext;