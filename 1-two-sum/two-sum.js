/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {}
    for(let i=0; i< nums.length; i++){
        const need = target - nums[i]
        if(obj[need] !== undefined){
            return [obj[need], i]
        }
        obj[nums[i]] = i
    }
  

};