/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * Approach- Ways we we can solve this
 *           1. Store values in array and using two pointers solve it
 *           2. Using stack push elements in stack in first iteration and in second iteration compare
 *              top of stack and current head and then pop stack and move current in forward direction
 *           3. Below solution is reversing in place without extra memory.
 *
 *
 *
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
