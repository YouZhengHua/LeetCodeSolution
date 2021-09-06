/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    if(nums.length < 3) return [];
    let ansArray = [];
    let startIndex = 0;
    nums.sort((a, b) => a-b);
    while(startIndex < nums.length - 2){
        let middleIndex = startIndex + 1;
        let endIndex = nums.length - 1;
        while(middleIndex !== startIndex && middleIndex !== endIndex){
            if(nums[middleIndex] + nums[endIndex] > -nums[startIndex]){
                do{
                    endIndex--;
                }while(nums[endIndex] === nums[endIndex + 1] && endIndex !== middleIndex);
            } else if(nums[middleIndex] + nums[endIndex] < -nums[startIndex]) {
                do{
                    middleIndex++;
                }while(nums[middleIndex] === nums[middleIndex - 1] && endIndex !== middleIndex);
            } else {
                ansArray.push([nums[startIndex], nums[middleIndex], nums[endIndex]]);
                do{
                    endIndex--;
                }while(nums[endIndex] === nums[endIndex + 1] && endIndex !== middleIndex);
            }
        }
        
        do{
            startIndex++;
        }while(nums[startIndex] === nums[startIndex - 1] && startIndex < nums.length - 2);
    }
    return ansArray
};