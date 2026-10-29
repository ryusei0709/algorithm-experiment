const assert = require('node:assert/strict');

class MinStack {
  constructor() {
    this.stack = [];
    // this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return Math.min(...this.stack);
  }
}

// NeetCode-style test cases
const testCases = [
  {
    name: 'Example 1 - Basic',
    operations: ['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'top', 'getMin'],
    inputs: [[], [-2], [0], [-3], [], [], [], []],
    expected: [null, null, null, null, -3, null, 0, -2],
  },
  {
    name: 'Duplicate minimums',
    operations: ['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'getMin', 'pop', 'getMin', 'top'],
    inputs: [[], [2], [2], [1], [], [], [], [], [], []],
    expected: [null, null, null, null, 1, null, 2, null, 2, 2],
  },
  {
    name: 'Minimum changes after pop',
    operations: ['MinStack', 'push', 'push', 'push', 'getMin', 'top', 'pop', 'getMin', 'pop', 'getMin', 'top'],
    inputs: [[], [5], [3], [7], [], [], [], [], [], [], []],
    expected: [null, null, null, null, 3, 7, null, 3, null, 5, 5],
  },
  {
    name: 'Negative and duplicate values',
    operations: ['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'getMin', 'pop', 'getMin', 'top'],
    inputs: [[], [0], [-1], [-1], [], [], [], [], [], []],
    expected: [null, null, null, null, -1, null, -1, null, 0, 0],
  },
  {
    name: 'Push after stack becomes empty',
    operations: ['MinStack', 'push', 'top', 'getMin', 'pop', 'push', 'getMin', 'top'],
    inputs: [[], [42], [], [], [], [-5], [], []],
    expected: [null, null, 42, 42, null, null, -5, -5],
  },
];

function runTest(test) {
  let stack;

  const actual = test.operations.map((operation, i) => {
    if (operation === 'MinStack') {
      stack = new MinStack();
      return null;
    }

    const result = stack[operation](...test.inputs[i]);
    return result === undefined ? null : result;
  });

  try {
    assert.deepStrictEqual(actual, test.expected);
    console.log(`✅ PASS: ${test.name}`);
    return true;
  } catch {
    console.log(`❌ FAIL: ${test.name}`);
    console.log('Expected:', test.expected);
    console.log('Actual:  ', actual);
    return false;
  }
}

let passed = 0;

for (const test of testCases) {
  if (runTest(test)) passed++;
}

console.log(`\nResult: ${passed}/${testCases.length} passed`);
