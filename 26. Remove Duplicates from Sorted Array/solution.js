// solution 1
/*
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

// solution 2
/*
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let indexCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[indexCounter] = nums[i];
      indexCounter++;
    }
  }
  return indexCounter;
};
