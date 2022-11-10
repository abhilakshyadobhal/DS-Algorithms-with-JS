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

var reverseList = function (head) {
    let curr = head;
    let temp_next;
    let prev = null;
    while (curr !== null) {
        temp_next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp_next;
    }
    return prev;
};
