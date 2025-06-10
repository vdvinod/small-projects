/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = null;
    let end;
    let result = [];
    for(i = 0; i < nums.length; i++){
        start = start === null ? nums[i] : start;
        if(nums[i+1] !== nums[i] + 1){
            end = nums[i];

            const value = start === end ? ""+end : start +"->"+end
            result.push(value)
            start = null;
        }
    }
    return result
};