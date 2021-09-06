/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    let ans = 0;
    let dif;
    let startIndex = 0;
    nums.sort((a, b) => a-b);
    while(startIndex < nums.length - 2){
        let middleIndex = startIndex + 1;
        let endIndex = nums.length - 1;
        while(middleIndex !== endIndex && middleIndex !== startIndex){
            const tmp = nums[startIndex] + nums[middleIndex] + nums[endIndex] - target;
            if(dif === undefined || dif > Math.abs(tmp)){
                dif = Math.abs(tmp);
                ans = nums[startIndex] + nums[middleIndex] + nums[endIndex];
            }
            if(tmp > 0){
                endIndex--;
            }else if(tmp < 0){
                middleIndex++;
            } else {
                return ans;
            }
        }
        startIndex ++;
    }
    return ans;
};