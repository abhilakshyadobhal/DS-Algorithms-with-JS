/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 *
 *
 * Approach- Here we are using fast and slow pointers. We will first update fast pointer upto n times.
 *           Then we will loop again on fast ptr but this time we will also move slow ptr till fast.next is not null
 *           The slow.next ptr will be standing at the correct nth position from behind as we placed fast ptr
 *           n step ahead of slow which means slow will be n step behind.
 */
var removeNthFromEnd = function (head, n) {
    let slow = head,
        fast = head;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if (!fast) return head.next;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return head;
};
