/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    length = needle.length;
    for(i=0; i< haystack.length; i++){
        if(needle === haystack.substr(i,length)){
            return i
        }
    }
    return -1;
};