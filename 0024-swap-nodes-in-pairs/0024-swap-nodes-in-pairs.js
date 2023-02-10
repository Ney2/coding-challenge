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
    let ansList = new ListNode(null, head);
    let current = ansList;
    while (current.next && current.next.next) {
        const first = current.next;
        const second = current.next.next;
        first.next = second.next;
        second.next = first;
        current.next = second;
        current = current.next.next;
    }

    return ansList.next; 
};