/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let count = 0;
    for(let num of nums){
        if(num !== val){
            nums[count] = num;
            count++;
        }
    }
    return count;
};