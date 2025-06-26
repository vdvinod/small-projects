/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
  const totalDistinct = new Set(nums).size;
  let count = 0;

  for (let left = 0; left < nums.length; left++) {
    const freq = new Map();
    let distinct = 0;

    for (let right = left; right < nums.length; right++) {
      const num = nums[right];
      if (!freq.has(num)) distinct++;
      freq.set(num, (freq.get(num) || 0) + 1);

      if (distinct === totalDistinct) {
        count++;
      }
    }
  }

  return count;

};