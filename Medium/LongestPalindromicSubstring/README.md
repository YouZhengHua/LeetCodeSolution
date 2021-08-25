# Longest Palindromic Substring
## Description
Given a string `s`, return *the longest palindromic substring* in `s`.

### Example 1:
    Input: s = "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.

### Example 2:
    Input: s = "cbbd"
    Output: "bb"

### Example 3:
    Input: s = "a"
    Output: "a"

### Example 4:
    Input: s = "ac"
    Output: "a"

### Example 4:
    Input: nums1 = [2], nums2 = []
    Output: 2.00000

### Constraints:
* `1 <= s.length <= 1000`
* `s` consist of only digits and English letters.

### 解題心得
找出最長的回文子字串。
可拆解為兩部分，一部份是字串的回文判定，一部份是子字串的切割。
回文判斷有兩種寫法，一種是逐字的字串頭尾判斷；另一種是將字串切為兩部分後，將其中一部份反轉後兩相比較，但這種方法時間複雜度較高，在網頁檢核時可能會有超時問題。
子字串的切割，從最長的原始字串開始進行回文判定，未通過則逐字遞減，盡可能將所有子字串形式都跑過一輪。

### 可改善空間
以 Manacher's Algorithm 迴文演算法 改善程式內容。
參考連結: https://havincy.github.io/blog/post/ManacherAlgorithm/

### Problems url: https://leetcode.com/problems/longest-palindromic-substring/