/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    if(nums.length === 0) return [-1, -1];
    let start = 0;
    let end = nums.length - 1;
    while(start < end){
        const mid = start + Math.floor((end - start) / 2);
        if(nums[mid] < target){
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    if(nums[end] !== target){return [-1, -1];}
    const left = end;
    end = nums.length - 1;
    while(start < end){
        const mid = start + Math.ceil((end - start) / 2);
        if(nums[mid] > target){
            end = mid - 1;
        } else {
            start = mid;
        }
    }
    return [left, start];
};