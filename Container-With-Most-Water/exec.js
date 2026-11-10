class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let result = 0;
    while (left < right) {
      const different = right - left;
      const calc = Math.min(heights[left], heights[right]) * different;
      if (calc > result) {
        result = calc;
      } 
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }

    return result
  }
}

const sol = new Solution();
const res = sol.maxArea([1, 7, 2, 5, 4, 7, 3, 6]);
