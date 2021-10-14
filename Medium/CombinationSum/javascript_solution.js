/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    candidates = candidates.sort((a,b) => a-b);
    const rtn = [];
    const numArray = [];
    f(candidates, target, 0, numArray, rtn)
    return rtn;
};

var f = (candidates, target, start, array, rtn) => {
    if(target < 0) {return false;}
    if(target === 0){rtn.push(array.slice());return false;}
    let i = start;
    while(i < candidates.length && candidates[i] <= target){
        array.push(candidates[i]);
        f(candidates, target - candidates[i], i, array, rtn);
        array.pop();
        i++;
    }
}