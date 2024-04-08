function reverseList(head) {

	// Think how to do it
	let curr = head
	let prev = null
	while (curr) {
		// Remember link to the next node
		let next = curr.next
		// Set prev node
		curr.next = prev
		// Prepare data for the next iteration
		prev = curr
		curr = next
	}
	head = prev
	return head
};
const linkedList = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
}
console.log(reverseList(linkedList))