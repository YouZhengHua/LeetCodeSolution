/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    const table = {
        "2":["a", "b", "c"]
        , "3":["d", "e", "f"]
        , "4":["g", "h", "i"]
        , "5":["j", "k", "l"]
        , "6":["m", "n", "o"]
        , "7":["p", "q", "r", "s"]
        , "8":["t", "u", "v"]
        , "9":["w", "x", "y", "z"]
    }
    
    let ans = [""];
    digits.split("").forEach(digit => {
        const tmp = [];
        ans.forEach(a => {
            table[digit].forEach(d => {
                tmp.push(a.concat(d));
            })
        })
        ans = tmp;
    });
    return ans.length === 1 ? [] : ans;
};