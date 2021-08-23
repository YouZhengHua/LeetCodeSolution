# Add Two Numbers
## Description
You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Example 1:
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

### Example 2:
    Input: l1 = [0], l2 = [0]
    Output: [0]

### Example 3:
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]

### Constraints:
* The number of nodes in each linked list is in the range [1, 100].
* 0 <= Node.val <= 9
* It is guaranteed that the list represents a number that does not have leading zeros.

### 解題方向
1. 直式加法
2. 傳入參數與回傳值並非一般數字陣列，而是`ListNode`物件，讀寫上要注意。
3. 兩個傳入數字序列有可能長度不一樣，使用迴圈進行讀取需要注意。
4. 序列最末端產生進位。

### Problems url: https://leetcode.com/problems/add-two-numbers/