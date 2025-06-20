/**
 * @param {number} n
 * @return {number}
 */
 function digitSum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
var countLargestGroup = function(n) {
     const map = {};

  for (let i = 1; i <= n; i++) {
    const sum = digitSum(i);
    map[sum] = (map[sum] || 0) + 1;
  }

  const maxSize = Math.max(...Object.values(map));
  let count = 0;

  for (let size of Object.values(map)) {
    if (size === maxSize) count++;
  }

  return count;
};