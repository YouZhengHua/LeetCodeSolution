/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let max = Math.pow(2, 31) - 1;
    let min = Math.pow(-2, 31);
    const isNegative = x < 0;
    const ans = parseInt(x.toString().split('').reverse().join('')) * (isNegative ? -1 : 1);
    return ans > max || ans < min ? 0 : ans;
};