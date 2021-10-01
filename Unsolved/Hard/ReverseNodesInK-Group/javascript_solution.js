/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
    if(k === 1){return head;}
    let rtnNode = null;
    let tailNode = null;
    let i = 0;
    let startNode = null;
    let endNode = null;
    while(head !== null && k > 1){
        if(i % k === 0){
            startNode = head;
        }else if(i % k === k - 1){
            endNode = head;
        }
        if(startNode !== null && endNode !== null){
            let endNextNode = endNode.next;
            let tmpNode = null;
            let reverseNode = null;
            let rNextNode = null;
            while(startNode === endNode){
                if(tmpNode === null){
                    tmpNode = startNode;
                }else{
                    
                }
                if(rNextNode === null){
                    reverseNode = tmpNode;
                    rNextNode = reverseNode;
                }else{
                    
                }
                startNode = startNode.next;
            }
            startNode = null;
            endNode = null;
        }
        head = head.next;
        i++;
    }
    if(startNode !== null){
        if(tailNode === null){
            rtnNode = startNode;
        }else{
            tailNode.next = startNode;
        }
    }
    return rtnNode;
};