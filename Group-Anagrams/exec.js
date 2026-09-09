class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {

    const hash = {};
    for (let i = 0; i < strs.length; i++) {
      const sortedStr = strs[i].split('').sort().join('');

      if (hash[sortedStr] === undefined) {
        hash[sortedStr] = [strs[i]]
      } else {
        hash[sortedStr].push(strs[i])
      }
    }

    return Object.values(hash)

  }
}


const sol = new Solution();
const res = sol.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]);
