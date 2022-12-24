/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *
 * SOL- https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/49785/java-solution-without-knowing-the-difference-in-len/?orderBy=most_votes
 *
 */
var getIntersectionNode = function (headA, headB) {
    let curr1 = headA,
        curr2 = headB;

    while (curr1 !== curr2) {
        curr1 = curr1 == null ? headB : curr1.next;
        curr2 = curr2 == null ? headA : curr2.next;
    }

    return curr1;
};
