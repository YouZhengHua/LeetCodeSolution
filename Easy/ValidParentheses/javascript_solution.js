/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let result = true;
    let index = 0;
    let left = {
        "}" : "{"
        , ")" : "("
        , "]" : "["
    }
    let tmp = "";
    while(result && index < s.length){
        const str = s.substring(index, index+1);
        if(str === "{" || str === "(" || str === "["){
            tmp += str;
        } else if(tmp.length > 0 && tmp.lastIndexOf(left[str]) === tmp.length - 1){
            tmp = tmp.slice(0, tmp.length - 1);
        } else {
            result = false;
        }
        index++;
    }
    return result && tmp.length === 0;
};