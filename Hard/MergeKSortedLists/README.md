# Merge k Sorted Lists
## Description
You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

*Merge all the linked-lists into one sorted linked-list and return it.*

### Example 1:
    Input: lists = [[1,4,5],[1,3,4],[2,6]]
    Output: [1,1,2,3,4,4,5,6]
    Explanation: The linked-lists are:
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    merging them into one sorted list:
    1->1->2->3->4->4->5->6

### Example 2:
    Input: lists = []
    Output: []

### Example 3:
    Input: lists = [[]]
    Output: []

### Constraints:
* `k == lists.length`
* `0 <= k <= 10^4`
* `0 <= lists[i].length <= 500`
* `-10^4 <= lists[i][j] <= 10^4`
* `lists[i]` is sorted in **ascending order**.
* The sum of `lists[i].length` won't exceed `10^4`.

### 解題心得
算是倆排序節點合併的衍生題，在外層多一個迴圈逐項讀取輸入項後再進行合併即可，惟執行效率仍有待改善。

### Problems url: https://leetcode.com/problems/merge-k-sorted-lists/