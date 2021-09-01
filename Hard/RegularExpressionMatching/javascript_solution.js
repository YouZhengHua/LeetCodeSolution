/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    let sIndex = 0;
    let pIndex = 0;
    let result = true;
    while(result && (sIndex < s.length || pIndex < p.length)){
        let pp = p.substring(pIndex, pIndex+1);
        let haveStar = p.substring(pIndex + 1, pIndex + 2) === "*";
        let isPoint = pp === ".";
        pIndex += haveStar ? 2 : 1;
        if(haveStar){
            while((pp === s.substring(sIndex, sIndex + 1) || isPoint) && sIndex < s.length){
                sIndex += 1;
            }
        }else {
            let ss = s.substring(sIndex, sIndex + 1);
            result = ss === pp || isPoint;
            sIndex += 1;
        }
    }
    return result;
};