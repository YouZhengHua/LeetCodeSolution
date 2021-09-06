# 3Sum
## Description
Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j, i != k`, and `j != k, and nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

### Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]

### Example 2:
    Input: nums = []
    Output: []

### Example 3:
    Input: nums = [0]
    Output: []

### Constraints:
* `0 <= nums.length <= 3000`
* `-10^5 <= nums[i] <= 10^5`

### 解題心得
以暴力找出所有可能性的方法會導致運行時間超時。

起先有考慮將原始陣列經過排序，以及多個 index 應用，但其正確性都有一定落差，最後參考網路上的解答才找出正確的 index 計算方式。

數學真的很重要。

參考解答: https://ithelp.ithome.com.tw/articles/10213264

### Problems url: https://leetcode.com/problems/3sum/