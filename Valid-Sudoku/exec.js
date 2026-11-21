class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const keyHash = {};
    for (let i = 0; i < board.length; i++) {
      // 縦の処理
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === '.') {
          continue;
        }

        const rowHashKey = `row-${i}-${board[i][j]}`;
        if (keyHash[rowHashKey] === undefined) {
          keyHash[rowHashKey] = 1;
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
          keyHash[key] = 1;
        } else {
          return false;
        }
      }

      // 3*3の判定

      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === '.') {
          continue;
        }

        const rowArea = Math.floor(i / 3);
        const columnArea = Math.floor(j / 3);

        const key = `${rowArea}-${columnArea}-${board[i][j]}`;

        console.log(key);
        if (keyHash[key] === undefined) {
          keyHash[key] = 1;
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
  ['.', '9', '1', '.', '.', '.', '.', '.', '3'],
  ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
  ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);
// const res = sol.isValidSudoku([
//   ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
//   ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '.', '3'],
//   ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
//   ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ]);

console.log(res);
