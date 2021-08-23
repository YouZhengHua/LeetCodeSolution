/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let returnNode = null;
    let needCarry = false;
    let tempNode;
    do{
        let nextNode = new ListNode((l1.val + l2.val + (needCarry ? 1 : 0)) % 10, null);
        if(returnNode === null){
            returnNode = nextNode;
            tempNode = returnNode;
        } else {
            tempNode.next = nextNode;
            tempNode = nextNode;
        }
        needCarry = (l1.val + l2.val + (needCarry ? 1 : 0)) >= 10
        l1 = l1.next === null ? new ListNode() : l1.next;
        l2 = l2.next === null ? new ListNode() : l2.next;
    }while(l1.val > 0 || l1.next !== null || l2.val > 0 || l2.next !== null || needCarry);
    return returnNode;
};