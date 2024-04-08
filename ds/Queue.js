// FIFO principle
// Example: Callback queue in JS runtime
class Queue {
	constructor() {
		this.queue = new Map()
		this.front = 0;
		this.rear = 0;
	}
	// O(1)
	enqueue(element) {
		this.queue.set(this.rear, element)
		this.rear++
	}

	// O(1)
	dequeue() {
		const item = this.queue.delete(this.front)
		this.front++
		return item
	}
	// O(1)
	peek() {
		return this.queue.get(this.front)
	}

	isEmpty() {
		return this.size === 0
	}

	size() {
		if (!this.isEmpty()) {
			return this.queue.size
		}
		return null
	}

	print() {
		return this.queue.values()
	}
}

const queue = new Queue()
queue.enqueue("Taras")
queue.enqueue("Bod")

console.log('queue.isEmpty()', queue.isEmpty())
console.log('queue.size()', queue.size())
console.log('queue.print()', queue.print())
console.log('queue.print()', queue.peek())