import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import HistoryContext from '../context/HistoryContext';

afterEach(cleanup);

describe('LogContainer testing', () => {
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

    expect(App_c.getByTestId('logheader')).toHaveTextContent('Next Player: O');

  });

  it('5 step game, winner is X', () => {

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

    expect(App_c.getByTestId('logheader')).toHaveTextContent('Winner: X');

  });

  it('test go to game start button, 5 step game, winner is X', () => {

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

    for (let i = 0; i <= 5; i++) {
      expect(App_c.getByTestId(`logbtn-${i}`)).not.toBeNull();
    }

    const step_0 = App_c.getByTestId('logbtn-0');
    fireEvent.click(step_0);

    const os = App_c.queryAllByText('O');
    expect(os).toHaveLength(0);

    const xs = App_c.queryAllByText('X');
    expect(xs).toHaveLength(0);
  });

  it('test go to previous state, check no change in logs buttons, and make a step, and check refresh in logs, 5 step game, winner is X', () => {

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

    const step_0 = App_c.getByTestId('logbtn-3');
    fireEvent.click(step_0);

    const os = App_c.queryAllByText('O');
    expect(os).toHaveLength(1);

    const xs = App_c.queryAllByText('X');
    expect(xs).toHaveLength(2);

    for (let i = 0; i <= 5; i++) {
      expect(App_c.getByTestId(`logbtn-${i}`)).not.toBeNull();
    }

    fireEvent.click(s_1_1);

    for (let i = 0; i <= 4; i++) {
      expect(App_c.queryByTestId(`logbtn-${i}`)).not.toBeNull();
    }

    expect(App_c.queryByTestId(`logbtn-5`)).toBeNull();

  });
});
