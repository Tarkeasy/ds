// LIFO principle
// Browser history -> <- (go forward, go back to the page)
// Example: Call Stack in JS runtime
class Stack {

	constructor() {
		this.items = []
	}
	// O(1)
	add(item) {
		this.items.push(item)
		return this.items.length
	}
	// O(1)
	remove() {
		return this.items.pop()
	}

	clear() {
		return this.items = []
	}
}
const stack = new Stack()
console.log(stack.add(1))
console.log(stack.add(2))
console.log(stack.add(3))
console.log(stack.add(4))
console.log(stack.remove())
console.log(stack.clear())