/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let test = []
    const reverse = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    for(let i=0; i < s.length; i++){
        test.push(s[i])
        if(test[test.length-1] === reverse[test[test.length-2]]){
            test.pop();
            test.pop();
        }
    }
    return test.length ? false : true
};