/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  let node = head;
  let lastNode = null;
  let reverseNode = null;

  do {
    reverseNode = new ListNode(node.val, lastNode);
    lastNode = reverseNode;
    node = node.next;
  } while (node);

  let result = true;
  node = head;
  do {
    if (reverseNode.val !== node.val) {
      result = false;
      break;
    }
    node = node.next;
    reverseNode = reverseNode.next;
  } while (node && reverseNode);

  return result;
};
