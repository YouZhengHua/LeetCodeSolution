/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let targetS = s;
    let stringLength = s.length - 1;
    let startIndex = 0;
    while(!isPalindrome(targetS)){
        targetS = s.substring(startIndex, startIndex + stringLength);
        if(startIndex + stringLength == s.length){
            stringLength -= 1;
            startIndex = 0;
        } else {
            startIndex += 1;
        }
    }
    return targetS;
};

/**
 * 回文判斷(二)
 * 字串逐字頭尾比較。
 */
const isPalindrome = function(s) {
    let validResult = true;
    let index = 0
    while(validResult && index <= Math.floor(s.length / 2)){
        validResult = s.substring(index, index+1) === s.substring(s.length-index-1, s.length-index);
        index += 1;
    }
    return validResult;
}

/**
 * 回文判斷(一)
 * 將字串拆分兩部分後，將其中一部份反轉後進行比對。
 * 時間複雜度較高，以網頁檢核會超時。
 */
/*
const isPalindrome = function(s) {
    middleIndex = Math.floor(s.length / 2);
    s1 = s.substring(0, middleIndex + (s.length % 2 == 1 ? 1 : 0));
    s2 = s.substring(middleIndex);
    return s1 === s2.split('').reverse().join('');
}
*/