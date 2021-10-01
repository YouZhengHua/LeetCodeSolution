/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    let isNegative = false;
    if(dividend < 0){
        isNegative = !isNegative;
        dividend = -dividend;
    }
    if(divisor < 0){
        isNegative = !isNegative;
        divisor = -divisor;
    }
    if(Math.abs(divisor) === 1){return isNegative ? -Math.min(dividend, Math.pow(2, 31)) : Math.min(dividend, Math.pow(2, 31) - 1);}
    let result = 0;
    while(dividend > 0){
        dividend -= divisor;
        result = dividend < 0 ? result : result + 1;
    }
    result = isNegative ? Math.min(result, Math.pow(2, 31)) : Math.min(result, Math.pow(2, 31) - 1)
    return isNegative ? -result : result;
};