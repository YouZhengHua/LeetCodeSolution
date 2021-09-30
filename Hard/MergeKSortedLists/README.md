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
算是倆排序節點合併的衍生題。
大概有兩種解法，一種是一次只讀取兩個節點進行合併，完成後再以合併完後的節點跟後續的節點逐個合併，此解法效率較差。
另一種是找出當前所有首個節點的最小值，將最小節點的值增加至最後回傳的節點中，接著再將最小節點指向他的下一個節點，在重複此動作到陣列中所有節點都讀過一輪後即可，執行效率較高。

### Problems url: https://leetcode.com/problems/merge-k-sorted-lists/