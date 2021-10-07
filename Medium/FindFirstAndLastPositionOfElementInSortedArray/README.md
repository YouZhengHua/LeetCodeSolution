# Find First and Last Position of Element in Sorted Array
## Description
Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

### Example 1:
    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3,4]

### Example 2:
    Input: nums = [5,7,7,8,8,10], target = 6
    Output: [-1,-1]

### Example 3:
    Input: nums = [], target = 0
    Output: [-1,-1]

### Constraints:
* `0 <= nums.length <= 10^5`
* `-10^9 <= nums[i] <= 10^9`
* `nums` is a non-decreasing array.
* `-10^9 <= target <= 10^9`


### 解題心得
找出可重複的有序數列中的目標值索引區間，因有時間複雜度的限制，故仍以二分搜尋法為主。

可先透過二分搜尋法找出目標值索引，接著往前後迴圈找出界線，但此方法在整個數列皆同樣是目標值時，時間複雜度會等同於 O(n)。

故我們將採用將二分搜尋法執行兩次，各別找出目標值前後索引。

### Problems url: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/