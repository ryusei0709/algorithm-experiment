class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  firstUniqChar(s) {
    const hash = {};
    for (let i = 0; i < s.length; i++) {
      if (hash[s[i]] === undefined) {
        hash[s[i]] = 0;
      } else {
        hash[s[i]]++;
      }
    }

    for (let i = 0; i < s.length; i++) {
      if (hash[s[i]] === 0) {
        return i;
      }
    }

    return -1;
  }
}

const tests = [
  { s: 'aaa', expected: -1 },
  { s: 'aaab', expected: 3 },
  { s: 'aaabb', expected: -1 },
  { s: 'abcabcddd', expected: -1 },

  { s: 'leetcode', expected: 0 },
  { s: 'loveleetcode', expected: 2 },
  { s: 'aabb', expected: -1 },
  { s: 'aabbc', expected: 4 },
  { s: 'a', expected: 0 },
  { s: 'abacabad', expected: 3 },
  { s: 'zzyx', expected: 2 },
  { s: 'aabbccdde', expected: 8 },
];

const solution = new Solution();

tests.forEach(({ s, expected }, i) => {
  const result = solution.firstUniqChar(s);
  const passed = result === expected;

  console.log(`Test ${i + 1}: ${passed ? 'PASS' : 'FAIL'}`, `| Expected: ${expected}, Got: ${result}`);
});
