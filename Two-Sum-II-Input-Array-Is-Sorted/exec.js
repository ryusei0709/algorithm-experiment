class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const calc = numbers[left] + numbers[right];
      if (calc === target) {
        return [left + 1, right + 1];
      } else if (calc < target) {
        left++;
      } else {
        right--;
      }
    }
  }
}

const sol = new Solution();
const res = sol.twoSum([1, 2, 3, 4], 3);
console.log(res);
