# Reverse Integer
## Description
Given a signed 32-bit integer `x`, return `x` *with its digits reversed*. If reversing `x` causes the value to go outside the signed 32-bit integer range [`-2^31, 2^31 - 1`], then return `0`.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

### Example 1:
    Input: x = 123
    Output: 321

### Example 2:
    Input: x = -123
    Output: -321

### Example 3:
    Input: x = 120
    Output: 21

### Example 4:
    Input: x = 0
    Output: 0

### Constraints:
* `-2^31 <= x <= 2^31 - 1`

### 解題心得
將數字反轉後輸出，可將輸入數字轉為字串，字串反轉後再轉回數字進行輸出，須注意負數符號的存在。

### Problems url: https://leetcode.com/problems/zigzag-conversion/