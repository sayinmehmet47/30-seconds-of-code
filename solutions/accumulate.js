// - Use `Array.prototype.reduce()`, initialized with an empty array accumulator to iterate over `nums`.
// - Use `Array.prototype.slice()` to get the previous partial sum or `0` and add the current element to it.
// - Use the spread operator (`...`) to add the new partial sum to the accumulator array containing the previous sums.

const accumulate = (...nums) => {
  return nums.reduce((acc, num) => {
    return [...acc, num + (acc.slice(-1)[0] || 0)];
  }, []);
};

// accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
// accumulate(...[1, 2, 3, 4]); // [1, 3, 6, 10]

console.log(accumulate(1, 2, 3, 4));
