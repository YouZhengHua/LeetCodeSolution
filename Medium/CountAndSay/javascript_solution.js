/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    if(n === 1){
        return "1";
    }
    return f(countAndSay(n-1));
};

var f = function(str){
    let number;
    let count = 0;
    let rtnStr = "";
    for(let s of str){
        if(number !== s){
            if(number !== undefined){
                rtnStr += count.toString() + number;
            }
            number = s;
            count = 1;
        }else{
            count+=1;
        }
    }
    rtnStr += count.toString() + number;
    return rtnStr;
}