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
/**
 *
 * Approach 1
 */
var middleNode = function (head) {
    let size = 0;
    let curr = head;
    let mid = head;

    while (curr !== null) {
        size++;
        curr = curr.next;
    }

    let midNode = Math.floor(size / 2);
    while (midNode !== 0) {
        mid = mid.next;
        midNode--;
    }

    return mid;
};

/**
 *
 * Approach -2
 * Let's think of a scenario where you have a field 200m long and there are two people,
 * A is running with 1x speed and B is running with 2x, so at any given point A will be at half of what B has reached.
 */
var middleNode = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
