# Swap Nodes in Pairs
## Description
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

### Example 1:
    Input: head = [1,2,3,4]
    Output: [2,1,4,3]

### Example 2:
    Input: head = []
    Output: []

### Example 3:
    Input: head = [1]
    Output: [1]

### Constraints:
* The number of nodes in the list is in the range `[0, 100]`.
* `0 <= Node.val <= 100`

### 解題心得
將奇偶節點位置交換，需要注意如果節點長度是奇數的時候會有多一個節點要做處理。

### Problems url: https://leetcode.com/problems/swap-nodes-in-pairs/