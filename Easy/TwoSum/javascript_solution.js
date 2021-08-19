/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let firstIndex = 0; firstIndex < nums.length; firstIndex++){
        const remainNums = nums.slice(firstIndex + 1);
        const secondTarget = target - nums[firstIndex]
        const secondIndex = remainNums.indexOf(secondTarget)
        if(secondIndex != -1){
            return [firstIndex, firstIndex + secondIndex + 1];
        }
    }    
};