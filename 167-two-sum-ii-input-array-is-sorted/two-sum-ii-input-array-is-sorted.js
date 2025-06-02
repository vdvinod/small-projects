/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    left = 0;
    right = numbers.length - 1;

    while(left < right){
        sum = numbers[left] + numbers[right]
        if(target === sum){
            return [left+1, right+1]
        }else if (target > sum){
            left++
        }else{
           right--
        }
    }
    return []
};