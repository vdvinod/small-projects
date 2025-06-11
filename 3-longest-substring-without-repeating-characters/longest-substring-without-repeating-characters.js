/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let count = 0;
    let char = {}
    for(i=0; i< s.length; i++){
        while(char[s[i]]){
            delete char[s[count]]
            count++;
        }
        char[s[i]] = s[i];
        max = Math.max(max, i - count + 1)
            
       
                
    }
    return max


  return maxLen;
};