/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let i = 0;
    let rtnNode = null;
    let tailNode = null;
    let node1 = null;
    let node2 = null;
    while(head !== null){
        if(i % 2 == 0){
            node1 = head;
        }
        else{
            node2 = head;
        }
        head = head.next;
        if(node1 !== null && node2 !== null){
            node1.next = node2.next;
            node2.next = node1;
            if(tailNode === null){
                rtnNode = node2;
                tailNode = rtnNode.next;
            }else{
                tailNode.next = node2;
                tailNode = node1;
            }
            node1 = null;
            node2 = null;
        }
        i++;
    }
    if(node1 !== null){
        if(tailNode === null){
            rtnNode = node1;
        }else{
            tailNode.next = node1;
        }
    }
    return rtnNode;
};