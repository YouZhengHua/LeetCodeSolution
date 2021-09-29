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
 var mergeTwoLists = function(l1, l2) {
    let rtnNode = null;
    let nextNode = null;
    while(l1 !== null || l2 !== null){
        const node = new ListNode();
        if(l1 === null){
            node.val = l2.val;
            l2 = l2.next;
        } else if(l2 === null){
            node.val = l1.val;
            l1 = l1.next;
        } else {
            if(l1.val < l2.val){
                node.val = l1.val;
                l1 = l1.next;
            } else {
                node.val = l2.val;
                l2 = l2.next;
            }
        }
        if(nextNode === null){
            rtnNode = node;
            nextNode = rtnNode;
        } else {
            nextNode.next = node;
            nextNode = nextNode.next;
        }
    }
    return rtnNode;
};