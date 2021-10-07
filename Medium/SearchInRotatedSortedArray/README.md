# Search in Rotated Sorted Array
## Description
There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly rotated** at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.

Given the array `nums` **after** the possible rotation and an integer `target`, return *the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.*

You must write an algorithm with `O(log n)` runtime complexity.

### Example 1:
    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4

### Example 2:
    Input: nums = [4,5,6,7,0,1,2], target = 3
    Output: -1

### Example 3:
    Input: nums = [1], target = 0
    Output: -1

### Constraints:
* `1 <= nums.length <= 5000`
* `-10^4 <= nums[i] <= 10^4`
* All values of `nums` are **unique**.
* `nums` is an ascending array that is possibly rotated.
* `-10^4 <= target <= 10^4`


### 解題心得
在搞懂題目時花了不少時間，最後找參考資料後終於把題目給弄懂了。

題目會給一個經排序過的整數序列，其中數字不會重複，但會在隨機的位置 k 進行旋轉，讓序列不會完全從小排到大，並要求在旋轉後的新數列中找出指定數字回傳其索引值。
因為題目是經排列的數列，所以我們是可以使用二分搜尋法進行搜尋，為難的點在於不知道旋轉的位置 k 會在數列的什麼位置。

二分搜尋法會將序列拆分為兩部分，而其中一部分會包含著旋轉的位置 k ，而那部分的數列是不會經過排序的狀態，所以我們很難透過其頭尾的值而知道其中的數值範圍，但另一邊則會是經過排序的狀態，因此我們就可透過其頭尾值來判斷，目標值是否有在其中數值範圍內。如果不在範圍內，就可以先推測目標值可能會在另一半的無序數列中，從而繼續執行二分搜尋。
而如何分辨哪部分是否為有序數列，採取的方式是用中間點的數字與最右邊的邊界值數值進行比較，如果右邊邊界值大於中間值，我們就可以認為右半部是有序的部分，反之則是左半部才是有序的部分。

最終我們可以將整個二分搜尋法的步驟整理為:
1. 取左右邊界索引與中間索引。
2. 判斷目標值是否等於中間值。
3. 判斷右邊界值是否大於中間值(找出有序的那半部)
4. 判斷目標值是否在有序部分內。
5. 重新返回步驟一直到左索引值 > 右索引值或找出目標索引。

### 參考資料
https://www.cnblogs.com/grandyang/p/4325648.html

### Problems url: https://leetcode.com/problems/search-in-rotated-sorted-array/