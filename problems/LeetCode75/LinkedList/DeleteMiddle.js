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
var deleteMiddle = function (head) {
	if (!head.next) {
		head = null
		return head
	}

	let length = 0;
	let curr = head
	while (curr.next) {
		length++
		curr = curr.next
	}

	let middle = Math.round(length / 2)
	curr = head

	for (let i = 0; i < middle - 1; i++) {
		curr = curr.next
	}


	curr.next = curr.next.next || null

	return head

};

const linkedList = {
	value: 1,
	next: {
		value: 2,
		next: null
	}
}

console.log(deleteMiddle(linkedList))