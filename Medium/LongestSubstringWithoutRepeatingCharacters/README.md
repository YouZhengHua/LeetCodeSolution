# Longest Substring Without Repeating Characters
## Description
Given a string `s`, find the length of the **longest substring** without repeating characters.

### Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

### Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

### Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

### Example 4:
    Input: s = ""
    Output: 0

### Constraints:
* `0 <= s.length <= 5 * 104`
* `s` consists of English letters, digits, symbols and space

### 解題方向
1. 找出目標字串`s`內最長且不重複字元的子字串
2. 以迴圈逐字讀取字串，並列已出現的字元表。
3. 出現重複字元時，可以從重複字元的第一次出現位置後開始重新讀取字串。例:`abcdcefgh` 當遇到重複的`c`時，可以直接從`d`的位置開始找下一個子字串，而不必從`b`找起。

### Problems url: https://leetcode.com/problems/longest-substring-without-repeating-characters/