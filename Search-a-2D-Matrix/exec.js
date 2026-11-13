class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
      let left = 0;
      let right = matrix[i].length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (matrix[i][mid] === target) {
          return true;
        }

        if (matrix[i][mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }

    return false;
  }
}

const sol = new Solution();
const res = sol.searchMatrix(
  [
    [1, 2, 4, 8],
    [10, 11, 12, 13],
    [14, 20, 30, 40],
  ],
  41,
);
console.log(res);
