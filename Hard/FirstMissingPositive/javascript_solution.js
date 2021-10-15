/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    for(let i in nums){
        while(nums[i] > 0 && nums[i] <= i && nums[nums[i] - 1] != nums[i]){
            const tmp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = tmp;
        }
    }
    for(let i in nums){
        if(parseInt(i) + 1 !== nums[i]){
            return parseInt(i) + 1;
        }
    }
    return nums.length + 1;
};