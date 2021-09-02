/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const table = {
        "M": 1000
        , "CM": 900
        , "D": 500
        , "CD": 400
        , "C": 100
        , "XC": 90
        , "L": 50
        , "XL": 40
        , "X": 10
        , "IX": 9
        , "V": 5
        , "IV": 4
        , "I": 1
    };
    let ans = 0;
    while(s.length > 0){
        for (let key of Object.keys(table)){
            if(s.indexOf(key) === 0){
                ans += table[key];
                s = s.substring(key.length, s.length);
            }
        }
    }
    return ans;
};