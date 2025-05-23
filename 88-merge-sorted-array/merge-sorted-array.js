/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1 // last valid value in nums1
    let p2 = n - 1 // last value in nums2
    let length = m + n - 1;

    while(p1 >=0 && p2 >=0){
        if(nums1[p1] > nums2[p2]){
            nums1[length] = nums1[p1]
            p1--;
        }else{
            nums1[length] = nums2[p2]
            p2--
        }
        length--;
    }
    while(p2>=0){
        nums1[length] = nums2[p2];
        p2--;
        length--;
    }
};