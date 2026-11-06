class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {boolean}
   */
  canCatchUp(target, position, speed) {
    const arr = [
      [position[0], speed[0]],
      [position[1], speed[1]],
    ];

    // sort
    arr.sort((a, b) => b[0] - a[0]);


    const carA = (target - arr[0][0]) / arr[0][1]
    const carB = (target - arr[1][0]) / arr[1][1]

    console.log(carA)
    console.log(carB)

    if(carB <= carA) {
      return true
    } 

    return false


  }
}

// ==============================
// Test Cases
// ==============================

const sol = new Solution();

const testCases = [
  {
    target: 12,
    position: [10, 8],
    speed: [2, 4],
    expected: true,
  },
  {
    target: 12,
    position: [10, 8],
    speed: [4, 2],
    expected: false,
  },
  {
    target: 10,
    position: [8, 5],
    speed: [1, 3],
    expected: true,
  },
  {
    target: 20,
    position: [15, 10],
    speed: [5, 5],
    expected: false,
  },
  {
    target: 10,
    position: [2, 7],
    speed: [4, 1],
    expected: true,
  },
  {
    target: 10,
    position: [2, 7],
    speed: [1, 5],
    expected: false,
  },
  {
    target: 10,
    position: [1, 9],
    speed: [9, 1],
    expected: true,
  },
  {
    target: 100,
    position: [40, 60],
    speed: [10, 5],
    expected: true,
  },
];

let passed = 0;

testCases.forEach((test, index) => {
  const result = sol.canCatchUp(test.target, test.position, test.speed);

  const success = result === test.expected;

  if (success) passed++;

  console.log(`Test ${index + 1}: ${success ? 'PASS' : 'FAIL'}`);

  if (!success) {
    console.log('  Input:', {
      target: test.target,
      position: test.position,
      speed: test.speed,
    });
    console.log('  Expected:', test.expected);
    console.log('  Actual:', result);
  }
});

console.log(`\nResult: ${passed}/${testCases.length} passed`);
