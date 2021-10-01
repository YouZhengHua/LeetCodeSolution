/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle === "") {return 0;}
    let index = 0;
    let isFind = false
    while(index + needle.length <= haystack.length && !isFind){
        isFind = haystack.substring(index, index + needle.length) === needle;
        index = isFind ? index : index + 1;
    }
    return isFind ? index : -1;
};