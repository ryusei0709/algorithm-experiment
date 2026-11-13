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

    return result;
  }

  // /**
  //  * o(n2)
  //  * @param {number[]} heights
  //  * @return {number}
  //  */
  // maxArea(heights) {
  //   let result = 0;
  //   for (let i = 0; i < heights.length; i++) {
  //     for (let j = i + 1; j < heights.length; j++) {
  //       const different = j - i;
  //       const calc = Math.min(heights[i], heights[j]) * different;

  //       if (result < calc) {
  //         result = calc
  //       }
  //     }
  //   }

  //   return result
  // }
}

const sol = new Solution();
const res = sol.maxArea([1, 7, 2, 5, 4, 7, 3, 6]);
