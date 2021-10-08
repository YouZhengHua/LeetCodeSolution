/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let targetIndex;
    while(start <= end){
        const mid = Math.floor(start + (end - start) / 2);
        if(nums[mid] === target){
            return mid;
        }
        if(target > nums[mid]){
            targetIndex = mid + 1
            start = mid + 1;
        }else{
            targetIndex = mid;
            end = mid - 1;
        }
    }
    return targetIndex;
};