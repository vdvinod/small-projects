/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length ===0) return true
    length = s.length;
    found = 0;
    for(i =0; i< t.length; i++){
        if(s[found] === t[i]){
            found++;
        }
        if(found === length){
            return true
        }
    }
    return false;
};