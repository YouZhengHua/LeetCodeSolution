# Trapping Rain Water
## Description
Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

### Example 1:
    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

### Example 2:
    Input: height = [4,2,0,3,2,5]
    Output: 9

### Example 3:
    Input: head = [1,2,3,4,5], k = 1
    Output: [1,2,3,4,5]

### Example 4:
    Input: head = [1], k = 1
    Output: [1]

### Constraints:
* `n == height.length`
* `1 <= n <= 2 * 10^4`
* `0 <= height[i] <= 10^5`

### 解題心得
已經可以從底層逐步往上數出所有儲水量，但時間複雜度會是 O(n^2) 導致超時，待改善。

### Problems url: https://leetcode.com/problems/trapping-rain-water/