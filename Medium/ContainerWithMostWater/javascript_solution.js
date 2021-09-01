/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let result = 0;
    let start = 0;
    let end = height.length - 1;
    while(start !== end){
        result = Math.max(Math.min(height[start], height[end]) * (end - start), result);
        if(height[start] > height[end]){
            end--;
        }else{
            start++;
        }
    }
    return result;
};