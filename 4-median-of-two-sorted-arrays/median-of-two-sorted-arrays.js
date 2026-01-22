/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // If one array is empty, return median of the other
  if (nums1.length === 0) {
    const n = nums2.length;
    const mid = Math.floor(n / 2);
    return n % 2 === 1
      ? nums2[mid]
      : (nums2[mid - 1] + nums2[mid]) / 2;
  }

  if (nums2.length === 0) {
    const n = nums1.length;
    const mid = Math.floor(n / 2);
    return n % 2 === 1
      ? nums1[mid]
      : (nums1[mid - 1] + nums1[mid]) / 2;
  }
    let i=0; 
    let j=0;
    const n = []
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            n.push(nums1[i])
            i++;
        }else {
            n.push(nums2[j])
            j++
        }
    }

    while(i < nums1.length){
        n.push(nums1[i])
        i++
    }
    while(j < nums2.length){
        n.push(nums2[j])
        j++
    }

   const mid = Math.floor(n.length/2);
    
    if(n.length % 2 === 1){
        return n[mid]
    }

    return (n[mid-1]+n[mid])/2
};