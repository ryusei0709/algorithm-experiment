class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const keyHash = {};
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === '.') {
          continue;
        }
        const key = `line-${i}-${board[i][j]}`;
        if (keyHash[key] === undefined) {
          keyHash[key] = board[i][j];
        } else {
          return false;
        }
      }

      for (let j = 0; j < board[i].length; j++) {
        if (board[j][i] === '.') {
          continue;
        }
        const key = `column-${i}-${board[j][i]}`;
        if (keyHash[key] === undefined) {
          keyHash[key] = board[i][j];
        } else {
          return false;
        }
      }

      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === '.') {
          continue;
        }
        const lineArea = Math.floor(i / 3);
        const columnArea = Math.floor(j / 3);

        const key = `${lineArea}-${columnArea}-${board[i][j]}`;

        if (keyHash[key] === undefined) {
          keyHash[key] = board[i][j];
        } else {
          return false;
        }
      }
    }
    return true;
  }
}

const sol = new Solution();
const res = sol.isValidSudoku([
  ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
  ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '.', '3'],
  ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
  ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);

console.log(res);
