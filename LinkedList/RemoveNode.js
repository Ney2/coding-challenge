/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    let count = 0
    const temp = new ListNode(0)
    temp.next = head
    let current = head
    while(current) {
        count++
        current = current.next
    }
    count -=n
    current = temp
    while(count>0) {
        count--
        current = current.next
    } 
    current.next = current.next.next
    return temp.next
    
};