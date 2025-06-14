/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
      nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums[nums.length - 1] - nums[0];

  const canFormPairs = (maxDiff) => {
    let count = 0;
    let i = 0;
    while (i < nums.length - 1) {
      if (nums[i + 1] - nums[i] <= maxDiff) {
        count++;
        i += 2; // use both elements
      } else {
        i++; // try next element
      }
    }
    return count >= p;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canFormPairs(mid)) {
      right = mid; // try a smaller diff
    } else {
      left = mid + 1; // need to increase diff
    }
  }

  return left;
};