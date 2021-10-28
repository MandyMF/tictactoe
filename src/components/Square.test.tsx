import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Square from './Square';

afterEach(cleanup);

describe('Square testing', () => {

  it('value call 0', () => {
    let value = 0;
    let Square_c =  render(<Square value={value} id="0"/>);
    let button = Square_c.getByTestId('square-0');
    expect(button).toHaveTextContent('');
    expect(button).toHaveValue(value.toPrecision());
  });

  it('value call X', () => {
    let value = 3;
    let Square_c =  render(<Square value={value} id="3"/>);
    let button = Square_c.getByTestId('square-3');
    expect(button).toHaveTextContent('X');
    expect(button).toHaveValue((value % 2).toPrecision());
  });

  it('value call O', () => {
    let value = 6;
    let Square_c =  render(<Square value={value} id="6"/>);
    let button = Square_c.getByTestId('square-6');
    expect(button).toHaveTextContent('O');
    expect(button).toHaveValue((value % 2).toPrecision());
  });

  it('function call when value is 0 is recorded, but disable when value is different to 0', () => {

    const mock_f = jest.fn();

    const Square_c =  render(<Square onClick={mock_f} value={0} id="1"/>);
    fireEvent.click( Square_c.getByTestId('square-1'));
    expect(mock_f.mock.calls.length).toBe(1);

    const Square_c_2 =  render(<Square onClick={mock_f} value={1} id="2"/>);
    const square = Square_c_2.getByTestId('square-2');
    expect(square).toBeDisabled();

  })
});
