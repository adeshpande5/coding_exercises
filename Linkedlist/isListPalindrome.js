/*Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, 
since this is what you'll be asked to do during an interview.

Given a singly linked list of integers, determine whether or not it's a palindrome.

Example

For l = [0, 1, 0], the output should be
isListPalindrome(l) = true;
For l = [1, 2, 2, 3], the output should be
isListPalindrome(l) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] linkedlist.integer l

A singly linked list of integers.

Guaranteed constraints:
0 ≤ list size ≤ 5 · 105,
-109 ≤ element value ≤ 109.

[output] boolean

Return true if l is a palindrome, otherwise return false.*/

// Definition for singly-linked list:
function ListNode(x) {
   this.value = x;
   this.next = null;
}

function checkOdd(linkedList) {
  let count = 0;
  let curr = linkedList;
  while (curr) {
    count++;
    curr = curr.next;
  }
  return count % 2 === 1;
}

function findMidPoint(linkedList) {
  let slow = linkedList;
  let fast = linkedList;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  //if (checkOdd(linkedList)) {
  if (fast != null) {
    return slow.next;
  } else {
    return slow;
  }
}


function reverseLL(root) {
  let prevNode = null;
  let currNode = root;
  let nextNode;
  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
}

function isListPalindrome(l) {
	const midpoint = findMidPoint(l);

  	let firstHead = l;
  	let secondHead = reverseLL(midpoint);

  	while (secondHead) {
    	if (secondHead.value !== firstHead.value) {
      		return false;
    	}
    	secondHead = secondHead.next;
    	firstHead = firstHead.next;
  	}
  	return true;
}