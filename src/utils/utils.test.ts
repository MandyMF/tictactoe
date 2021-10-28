import { render, cleanup, fireEvent } from '@testing-library/react';
import {isWinner} from './utils';

afterEach(cleanup);

describe('Utils Tests', () => {
  afterEach(cleanup);

  it('isWinner function', () => {
    const blank_board_test = isWinner(
      [[0,0,0],
      [0,0,0],
      [0,0,0]
      ]);

      expect(blank_board_test).toBeFalsy();

    const no_winner_5_moves = isWinner(
        [[1,0,0],
        [0,2,5],
        [0,4,3]
        ]);
  
    expect(no_winner_5_moves).toBeFalsy();

    const winner_5_moves_diagonal = isWinner(
      [[1,0,0],
      [0,5,2],
      [0,4,3]
      ]);

    expect(winner_5_moves_diagonal).toBeTruthy();

    const winner_6_moves_vertical = isWinner(
      [[1,6,3],
      [0,2,5],
      [0,4,0]
      ]);

    expect(winner_6_moves_vertical).toBeTruthy();

    const winner_6_moves_horizontal = isWinner(
      [[1,5,3],
      [0,2,6],
      [0,4,0]
      ]);

    expect(winner_6_moves_horizontal).toBeTruthy();

  });
});