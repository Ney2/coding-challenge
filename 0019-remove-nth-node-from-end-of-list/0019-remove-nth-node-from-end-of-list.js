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
    let current = head
    while(current) {
        count++
        current = current.next
    }
    
    count += 1
    count = count - n
    let value = 1
    current = head
    let temp = current
    if(count == 1) {
        temp = head.next
        return temp
    }
    while(current && value < count) {
        temp = current
        current = current.next
        value++
    }
    temp.next = current.next
    current.next = null
    
    return head        
};