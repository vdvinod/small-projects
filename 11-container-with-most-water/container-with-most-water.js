/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     left = 0;
//     right = height.length - 1;
//     maxWater = 0;
//     while(left < right){
//         maxheight = Math.min(height[left], height[right]);
//         gap = right - left;
//         maxWater = Math.max(maxWater, maxheight * gap)
//         if(height[left] < height[right]){
//             left++
//         }else{
//             right--
//         }
//     }
//     return maxWater;
// };
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const area = width * Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++; // Try to find a taller line
    } else {
      right--; // Try to find a taller line
    }
  }

  return maxWater;
}