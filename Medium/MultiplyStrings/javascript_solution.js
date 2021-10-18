/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    if(num1 === "0" || num2 === "0") return "0";
    const rtn = [];
    for(let i = num2.length - 1; i >= 0; i--){
        const a = parseInt(num2.substring(i, i + 1));
        for(let j = num1.length - 1; j >= 0; j--){
            const b = parseInt(num1.substring(j, j + 1));
            addNum(rtn, a * b, (num2.length - 1 - i) + (num1.length - 1 - j));
        }
    }
    return rtn.reverse().join("");
};

var addNum = (array, num, i) =>{
    array[i] = array[i] === undefined ? num : array[i] + num;
    if(array[i] >= 10){
        addNum(array, Math.floor(array[i] / 10), i+1);
        array[i] = array[i] % 10;
    }
}