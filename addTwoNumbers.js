/**
 * Definition for singly-linked list node.
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l1Node = l1;
    let l2Node = l2;
    let l3 = new ListNode(0);
    let l3Node = l3;
    let carry = 0;

    while (l1Node || l2Node) {
        const sum = (l1Node?.val ?? 0) + (l2Node?.val ?? 0) + carry
        const rem = sum % 10;
        carry = Math.floor(sum / 10);
        l3Node.val = rem;
        l3Node.next = new ListNode(0);
        l3Node = l3Node.next;
        l1Node = l1Node?.next;
        l2Node = l2Node?.next;
    }

    if (carry) {
        l3Node.val = carry
    }

    return l3;
};
