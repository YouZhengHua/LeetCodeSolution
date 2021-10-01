/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let count = 0;
    let preNum;
    for(let i = 0; i < nums.length; i++){
        if(preNum === undefined || nums[i] > preNum){
            nums[count] = nums[i];
            count++;
            preNum = nums[i];
        }
    }
    return count;
};