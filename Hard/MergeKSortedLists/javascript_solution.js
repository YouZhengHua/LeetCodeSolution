/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/**
 * 解法二：迴圈找出節點陣列中最小的首個節點
 */
 var mergeKLists = function(lists) {
    let rtnNode = null;
    let nextNode = null;
    while(!lists.every((node) => node === null) && lists.length > 0){
        let minNode = lists[0];
        let minIndex = 0;
        lists.forEach((node, index) => {
            if(node !== null && (minNode === null || minNode.val > node.val)){
                minNode = node;
                minIndex = index;
            }
        });
        if(nextNode === null){
            rtnNode = new ListNode(minNode.val);
            nextNode = rtnNode;
        }else{
            nextNode.next = new ListNode(minNode.val);
            nextNode = nextNode.next;
        }
        lists[minIndex] = lists[minIndex].next;
    }
    return rtnNode;
};

/**
 * 解法一；迴圈讀取節點陣列，並逐個合併，效率較差。
 */
 var mergeKLists = function(lists) {
    let rtnNode = null;
    for(let node of lists){
        if(rtnNode === null){
            rtnNode = node;
            continue;
        }
        rtnNode = mergeNode(rtnNode, node);
    }
    return rtnNode;
};
    
function mergeNode(l1, l2){
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
}