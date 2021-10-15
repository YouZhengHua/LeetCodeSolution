# First Missing Positive
## Description
Given an unsorted integer array `nums`, return the smallest missing positive integer.

You must implement an algorithm that runs in `O(n)` time and uses constant extra space.

### Example 1:
    Input: nums = [1,2,0]
    Output: 3

### Example 2:
    Input: nums = [3,4,-1,1]
    Output: 2

### Example 3:
    Input: nums = [7,8,9,11,12]
    Output: 1

### Constraints:
* `1 <= nums.length <= 5 * 10^5`
* `-2^31 <= nums[i] <= 2^31 - 1`

### 解題心得
傳入未排序的整數陣列，並從中找出缺少的最小正整數。
因為題目有時間複雜度與空間複雜度的額外要求，故不能先用內建的排序法先將陣列排序後再找出回傳值，而是要從題目要求中找出對應的排序法，直接更改陣列的值。
起先只知道根據要求只能使用單層迴圈進行解題，但沒想到要如何將陣列進行排序同時找出解答的方法，最後也是上網找參考解答才找到方法。

### 參考資料
https://www.cnblogs.com/grandyang/p/4395963.html

### Problems url: https://leetcode.com/problems/first-missing-positive/