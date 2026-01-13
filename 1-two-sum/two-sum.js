/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   
const m = {};
for(let i=0; i < nums.length; i++){
    let k = target - nums[i];
    if(m[k] != undefined ){
        return [m[k], i]
    }
    m[nums[i]] = i
}
};

