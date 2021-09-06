# 3Sum Closest
## Description
Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`.

*Return the sum of the three integers*.

You may assume that each input would have exactly one solution.

### Example 1:
    Input: nums = [-1,2,1,-4], target = 1
    Output: 2
    Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

### Example 2:
    Input: nums = [0,0,0], target = 1
    Output: 0

### Constraints:
* `3 <= nums.length <= 1000`
* `-1000 <= nums[i] <= 1000`
* `-10^4 <= target <= 10^4`

### 解題心得
與前一提 3Sum 相似，只是從加總為0改為加總為目標值，將原先的程式碼稍作改動即可。

從判斷零改為判斷與目標值的間距。

### Problems url: https://leetcode.com/problems/3sum-closest/