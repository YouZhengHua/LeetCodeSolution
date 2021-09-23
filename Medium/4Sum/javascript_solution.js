/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    if(nums.length < 4){return [];}
    nums.sort((a, b) => a - b);
    let ansArray = [];
    let index0 = 0;
    while(index0 < nums.length - 3){
        let index1 = index0 + 1;
        while(index1 < nums.length - 2){
            let index2 = index1 + 1;
            let index3 = nums.length - 1;
            while(index2 !== index1 && index2 !== index3){
                if(nums[index0] + nums[index1] + nums[index2] + nums[index3] > target){
                    do{
                        index3--;
                    }while(nums[index3] === nums[index3 + 1] && index2 < index3);
                }else if(nums[index0] + nums[index1] + nums[index2] + nums[index3] < target){
                    do{
                        index2++;
                    }while(nums[index2] === nums[index2 - 1] && index2 < index3);
                }else {
                    ansArray.push([nums[index0], nums[index1], nums[index2], nums[index3]]);
                    do{
                        index2++;
                    }while(nums[index2] === nums[index2 - 1] && index2 < index3);
                }
            }
            do{
                index1++;
            }while(nums[index1] === nums[index1 - 1] && index1 < nums.length - 2);
        }
        do{
            index0++;
        }while(nums[index0] === nums[index0 - 1] && index0 < nums.length - 3);
    }
    return ansArray
};