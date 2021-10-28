
export const isWinner = (board: number[][]) => {
    let flat_board = board.flat();
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (flat_board[a] && flat_board[b] && flat_board[c] && flat_board[a] % 2 === flat_board[b] % 2 && flat_board[a] % 2 === flat_board[c] % 2) {
        return true;
      }
    }
    return false;
  }