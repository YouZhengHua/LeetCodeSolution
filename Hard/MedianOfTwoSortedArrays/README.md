# Median of Two Sorted Arrays
## Description
Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

### Example 1:
    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.

### Example 2:
    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

### Example 3:
    Input: nums1 = [0,0], nums2 = [0,0]
    Output: 0.00000

### Example 4:
    Input: nums1 = [], nums2 = [1]
    Output: 1.00000

### Example 4:
    Input: nums1 = [2], nums2 = []
    Output: 2.00000

### Constraints:
* `nums1.length == m`
* `nums2.length == n`
* `0 <= m <= 1000`
* `0 <= n <= 1000`
* `1 <= m + n <= 2000`
* `-10^6 <= nums1[i], nums2[i] <= 10^6`

### 解題心得
題目本身並不難，只是數值陣列合併並取中位數，難點在於題目敘述中關於時間複雜度的要求。
如果直接將兩個數值陣列合併後並使用內建排序法進行排序，就會超過題目的要求`O(log (m+n))`。
但因為題目已經有限制輸入的兩個數值陣列是已經經過排序的陣列，故可以直接使用單一迴圈進行陣列合併，進而達成題目的時間複雜度要求。

### Problems url: https://leetcode.com/problems/median-of-two-sorted-arrays/