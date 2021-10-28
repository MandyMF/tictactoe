import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('Start game testing', () => {

  it('board', () => {
    const App_c =  render(<App />);
    const list_rows = App_c.queryAllByTestId('row');
    expect(list_rows).toHaveLength(3);

    const list_squares = App_c.queryAllByTestId('square');
    expect(list_squares).toHaveLength(9);
  })

  it('logs', () => {
    const App_c =  render(<App />);

    const reset_game = App_c.getByText("Go to game start");
    expect(reset_game).toBeDefined();

    const next_player = App_c.getByText("Next Player: X");
    expect(next_player).toBeDefined();
  })

 /*const App_c = render(<App />);
  const text_c = App_c.getByText(/learn react/i)
  //console.log("---------->", text_c)
  expect(text_c).toBeInTheDocument();


  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();*/
});
