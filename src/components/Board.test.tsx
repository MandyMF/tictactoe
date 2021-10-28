import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Board from './Board';
import App from '../App';
import HistoryContext from '../context/HistoryContext';

afterEach(cleanup);

describe('Board testing', () => {
  afterEach(cleanup);

  it('5 step game, no win', () => {

    const App_c = render(<App></App>);

    const s_0_0 = App_c.getByTestId('square-0-0');
    fireEvent.click(s_0_0);

    const s_0_1 = App_c.getByTestId('square-0-1');
    fireEvent.click(s_0_1);

    const s_0_2 = App_c.getByTestId('square-0-2');
    fireEvent.click(s_0_2);

    const s_1_0 = App_c.getByTestId('square-1-0');
    fireEvent.click(s_1_0);

    const s_1_1 = App_c.getByTestId('square-1-1');
    fireEvent.click(s_1_1);

    const os = App_c.getAllByText('O');
    expect(os).toHaveLength(2);

    const xs = App_c.getAllByText('X');
    expect(xs).toHaveLength(3);

  });

  it('5 step game, win and no more changes in board', () => {

    const App_c = render(<App></App>);

    const s_0_0 = App_c.getByTestId('square-0-0');
    fireEvent.click(s_0_0);

    const s_1_0 = App_c.getByTestId('square-1-0');
    fireEvent.click(s_1_0);

    const s_0_1 = App_c.getByTestId('square-0-1');
    fireEvent.click(s_0_1);

    const s_1_1 = App_c.getByTestId('square-1-1');
    fireEvent.click(s_1_1);

    const s_0_2 = App_c.getByTestId('square-0-2');
    fireEvent.click(s_0_2);

    const s_1_2 = App_c.getByTestId('square-1-2');
    fireEvent.click(s_1_2);


    const os = App_c.getAllByText('O');
    expect(os).toHaveLength(2);

    const xs = App_c.getAllByText('X');
    expect(xs).toHaveLength(3);

  });
});
