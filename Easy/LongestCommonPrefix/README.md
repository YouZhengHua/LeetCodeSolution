# Longest Common Prefix
## Description
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

### Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"

### Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

### Constraints:
* `1 <= strs.length <= 200`
* `0 <= strs[i].length <= 200`
* `strs[i]` consists of only lower-case English letters.

### 解題心得
需同樣採用演算法 Sliding Window 進行解題，否則容易導致執行時間超時的問題。

### Problems url: https://leetcode.com/problems/longest-common-prefix/