class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {boolean}
   */
  containsNearbyDuplicate(nums, k) {

    const hash = {};
    for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] !== undefined) {

        const calcIndex = i - hash[nums[i]]

        if(calcIndex <= k) {
          return true
        }
      } 
        hash[nums[i]] = i
    }

    return false;
  }
}
const solution = new Solution();

console.log(
  solution.containsNearbyDuplicate([1, 2, 3, 1], 3)
);
// true

console.log(
  solution.containsNearbyDuplicate([1, 2, 3, 1], 2)
);
// false

console.log(
  solution.containsNearbyDuplicate([1, 0, 1, 1], 1)
);
// true

console.log(
  solution.containsNearbyDuplicate([1, 2, 3, 4], 3)
);
// false

console.log(
  solution.containsNearbyDuplicate([99, 99], 0)
);
// false