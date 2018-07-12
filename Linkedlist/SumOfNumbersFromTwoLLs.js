/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
var addTwoNumbers = function(l1, l2) {
    
	let dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;
    while (p != null || q != null) {
        let x = (p != null) ? p.val : 0;
        let y = (q != null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(Math.floor(sum % 10));
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
	let out = dummyHead.next;
	let result = [];
	while(out != null){
		result.push(out.val);
		out = out.next;
	}
    return result;
};

//Test
let f = new ListNode(2);
f.next = new ListNode(4);
f.next.next = new ListNode(3);

let s = new ListNode(5);
s.next = new ListNode(6);
s.next.next = new ListNode(4);

console.log(addTwoNumbers(f, s));	