/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Iterative Approach
var removeElements = function (head, val) {
    let curr = head;
    while (head !== null && head.val == val) head = head.next;
    while (curr !== null && curr.next !== null) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};

//Recursive Approach
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var removeElements = function (head, val) {
    if (head == null || head.val == null) return null;
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
};
