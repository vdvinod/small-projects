/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    left = 0;
    right = height.length - 1;
    maxWater = 0;
    while(left < right){
        maxheight = Math.min(height[left], height[right]);
        gap = right - left;
        maxWater = Math.max(maxWater, maxheight * gap)
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return maxWater;
};