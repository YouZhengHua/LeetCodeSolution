/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let endIndex = strs.reduce((minLength, str) => Math.min(str.length, minLength), strs[0].length);
    let valid = false;
    while(!valid && endIndex > 0){
        const validStr = strs[0].substring(0, endIndex);
        valid = strs.every(str => str.substring(0, endIndex) === validStr);
        endIndex = !valid ? endIndex - 1 : endIndex;
    }
    return strs[0].substring(0, endIndex);
};