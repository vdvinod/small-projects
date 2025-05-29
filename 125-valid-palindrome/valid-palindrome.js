/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   let str = s.replace(/[^a-zA-Z0-9]/g, "");
   let str2 = str.split("").reverse().join("");
   return str.toLowerCase() == str2.toLowerCase() ? true : false
};