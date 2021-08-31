/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    return x < 0 ? false : isPalindromeStr(x.toString());
};

const isPalindromeStr = function(s) {
    let validResult = true;
    let index = 0
    while(validResult && index <= Math.floor(s.length / 2)){
        validResult = s.substring(index, index+1) === s.substring(s.length-index-1, s.length-index);
        index += 1;
    }
    return validResult;
}