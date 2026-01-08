/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 if(x<0) return false;

 let temp = x;
 let reverse = 0;

 while(x > 0){
    let last = x%10;
    reverse = reverse * 10;
    reverse = reverse + last
    x = Math.floor(x / 10)
 }

 return reverse === temp ? true : false
};