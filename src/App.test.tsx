import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('Start game testing', () => {

  it('board', () => {
    const App_c =  render(<App />);
    const list_rows = App_c.queryAllByTestId('row');
    expect(list_rows).toHaveLength(3);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const list_squares = App_c.getAllByTestId(`square-${i}-${j}`);
        expect(list_squares).toBeDefined();
      }
    }
    
  })

  it('logs', () => {
    const App_c =  render(<App />);

    const reset_game = App_c.getByText("Go to game start");
    expect(reset_game).toBeDefined();

    const next_player = App_c.getByText("Next Player: X");
    expect(next_player).toBeDefined();
  })
});
