import types from 'prop-types'
import internal from 'stream';
import { TupleType } from 'typescript';

export type ContextType = {
    history: Array<number[][]>,
    board : number[][],
    current : number,
    handleMark: (l: number, c: number) => void,
    handleGoToBoard: (index: number) => void,
    win: boolean
}

/*export type HistoryChange = {
    x: number,
    y: number,
    player: string
}*/