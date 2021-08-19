# Two Sum
## Description
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

輸入一數字陣列`nums`與一整數`target`，回傳數字陣列中兩數字加總相等於`target`的索引值陣列。

僅有**一種輸出結果**，且陣列中的元素不能被重複使用。

輸出的索引值陣列順序不影響結果判定。

### Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].

### Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

### Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]

### Constraints:
    2 <= nums.length <= 10^4
    -10^9 <= nums[i] <= 10^9
    -10^9 <= target <= 10^9
    Only one valid answer exists.

### 解題方向
逐項讀取`nums`，透過讀出的第一個數字與`target`相減得出第二個數字的值，並確認剩餘的數字中是否存有第二個數字即可。

### Problems url: https://leetcode.com/problems/two-sum/