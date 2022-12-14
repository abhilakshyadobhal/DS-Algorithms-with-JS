/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 *
 * Approach- Slow and fast pointers
 */
var hasCycle = function (head) {
    if (head == null || head.next == null) {
        return false;
    }
    let slow = head,
        fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
};
