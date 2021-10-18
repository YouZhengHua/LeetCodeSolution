# Multiply Strings
## Description
Given two non-negative integers `num1` and `num2` represented as strings, return the product of `num1` and `num2`, also represented as a string.

**Note:** You must not use any built-in BigInteger library or convert the inputs to integer directly.

### Example 1:
    Input: `num1` = "2", `num2` = "3"
    Output: "6"

### Example 2:
    Input: `num1` = "123", `num2` = "456"
    Output: "56088"

### Example 3:
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]

### Constraints:
* `1 <= num1.length, num2.length <= 200`
* `num1` and `num2` consist of digits only.
* Both `num1` and `num2` do not contain any leading zero, except the number `0` itself.

### 解題心得
即大數乘法。

### Problems url: https://leetcode.com/problems/multiply-strings/