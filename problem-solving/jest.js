/**
 * Question- 
            Here are some simple Jest test code.

            expect(3).toBe(3) // ✅
            expect(4).toBe(3) // ❌

            We can reverse it with not.

            expect(3).not.toBe(3) // ❌
            expect(4).not.toBe(3) // ✅
 * 
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
function myExpect(comp) {
    const toBe = (val, rev) => {
        if (rev) {
            if (!Object.is(val, comp)) {
                return true;
            }
            throw new Error();
        }
        if (Object.is(val, comp)) {
            return true;
        }
        throw new Error();
    };

    const obj = {
        toBe,
        not: {
            toBe: (val) => toBe(val, true),
        },
    };
    return obj;
}

console.log(NaN !== NaN);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
