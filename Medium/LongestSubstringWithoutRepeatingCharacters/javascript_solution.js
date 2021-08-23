/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let nowLength = 0;
    let subArray = [];
    let index = 0;
    while(s.length > 0 && index < s.length){
        const sub = s.substring(index, index+1);
        if(subArray.indexOf(sub) == -1){
            nowLength += 1;
            if(maxLength < nowLength){
                maxLength = nowLength;
            }
            subArray.push(sub);
            index +=1;
        }
        else {
            s = s.substring(s.indexOf(sub) + 1, s.length)
            index = 0;
            nowLength = 0
            subArray = []
        }
    }
    return maxLength;
};