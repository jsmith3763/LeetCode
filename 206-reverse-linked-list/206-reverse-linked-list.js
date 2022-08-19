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
const reverseList = function(head) {
  let currentNode = head;
  let previous = null;
  
  while(currentNode) {
    let next = currentNode.next;
    currentNode.next = previous;
    previous = currentNode;
    currentNode = next;
  }
  return previous;
}