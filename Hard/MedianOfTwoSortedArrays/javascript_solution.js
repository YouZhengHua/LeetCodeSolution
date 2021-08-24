/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const maxLength = nums1.length + nums2.length;
    let index1 = 0;
    let index2 = 0;
    const sumArray = [];
    while(index1 + index2 < maxLength){
        if(nums1[index1] === undefined){
            sumArray.push(nums2[index2]);
            index2 += 1;
        }else if(nums2[index2] === undefined){
            sumArray.push(nums1[index1]);
            index1 += 1;
        }else if(nums1[index1] < nums2[index2]){
            sumArray.push(nums1[index1]);
            index1 += 1;
        } else {
            sumArray.push(nums2[index2]);
            index2 += 1;
        }
    }
    if(maxLength % 2 == 1){
        return sumArray[Math.floor(maxLength/2)]
    } else {
        return (sumArray[maxLength / 2 - 1] + sumArray[maxLength / 2]) / 2;
    }
};