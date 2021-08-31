/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let index = 0;
    let checkSpace = true;
    let checkSymbol = true;
    let checkDigit = true;
    let isNegative = false;
    let ans = "";
    while(index < s.length && (checkSpace || checkSymbol || checkDigit)){
        let char = s.substring(index, index+1);
        if(checkSpace){
            if(char === " "){
                index += 1;
            }else{
                checkSpace = false;
            }
        } else if(checkSymbol){
            if(char === "+"){
                index +=1;
            }else if(char === "-"){
                index +=1;
                isNegative = true;
            }
            checkSymbol = false;
        } else if(checkDigit) {
            let isDigit = char.match(/\d/) !== null;
            if(char.match(/\d/) !== null){
                ans = ans + char;
                index += 1;
            }else{
                checkDigit = false;
            }
        }
    }
    if(ans.length === 0){
        return 0;
    }
    ans = parseInt(ans) * (isNegative ? -1 : 1);
    return ans > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : ans < Math.pow(-2, 31) ? Math.pow(-2, 31) : ans;
};