/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
   const freqMap = new Map();

  // Count frequency of each character
  for (const char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  const oddFreqs = [];
  const evenFreqs = [];

  // Separate frequencies into odd and even arrays
  for (const count of freqMap.values()) {
    if (count % 2 === 1) {
      oddFreqs.push(count);
    } else {
      evenFreqs.push(count);
    }
  }

  // If no odd or even frequency chars, no valid pairs
  if (oddFreqs.length === 0 || evenFreqs.length === 0) return 0;

  let maxDiff = -Infinity;

  // Check all pairs for max difference
  for (const oddCount of oddFreqs) {
    for (const evenCount of evenFreqs) {
      const diff = oddCount - evenCount;
      if (diff > maxDiff) maxDiff = diff;
    }
  }

  // If maxDiff is negative or zero, return 0 as no positive diff found
  return  maxDiff
};