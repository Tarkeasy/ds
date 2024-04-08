class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	isEmpty() {
		return this.size === 0
	}

	getSize() {
		return this.size
	}
	// O(1)
	prepend(value) {
		const node = new Node(value)
		if (this.isEmpty()) {
			this.head = node
			this.tail = node
		} else {
			// Add new node as head instead of already existed head of the list
			node.next = this.head
			this.head = node
		}
		this.size++
	}
	// O(n) ca be O(1) if we already know tail node
	append(value) {
		const node = new Node(value)
		if (this.isEmpty()) {
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			this.tail = node
		}

		this.size++
	}
	// O(n) ca be O(1) if we already know prev node
	insert(value, index) {
		if (index < 0 || index > this.size) {
			return 'Wrong index'
		}
		if (index === 0) {
			this.prepend(value)
		} else {
			const node = new Node(value)
			let prev = this.head
			for (let i = 0; i < index - 1; i++) {
				prev = prev.next
			}
			node.next = prev.next
			prev.next = node
			this.size++
		}


	}
	// O(n)
	print() {
		if (this.isEmpty()) {
			console.log('List is empty')
		} else {
			let curr = this.head
			let listValues = ''
			while (curr) {
				listValues += `${curr.value} `
				curr = curr.next
			}
			return listValues
		}

	}

	removeFromFront() {
		if (this.isEmpty()) {
			return null
		}
		const value = this.head.value
		this.head = this.head.next
		this.size--;
		return value
	}

	removeFromEnd() {
		if (this.isEmpty()) {
			return null
		}
		const tail = this.tail.value
		if (this.size === 1) {
			this.head = null
			this.tail = null
		} else {
			let prev = this.head
			while (prev.next !== this.tail) {
				prev = prev.next
			}
			prev.next = null
		}

		size--
		return tail
	}

	removeFrom(index) {
		if (index < 0 || index > this.size) {
			return 'Wrong index'
		}
		let removeNode
		if (index === 0) {
			removeNode = this.head
			this.head = this.head.next
		}

		let curr = this.head
		for (let i = 0; i < index - 1; i++) {
			curr = curr.next
		}
		removeNode = curr.next
		curr.next = curr.next.next

		this.size--;
		return removeNode

	}

	removeValue(value) {
		if (this.isEmpty()) {
			return "The linked list an empty"
		}
		if (this.head.value === value) {
			this.head = this.head.next
		}
		let curr = this.head
		let prev = this.head

		while (curr.value !== value) {
			prev = curr
			curr = curr.next
		}
		prev.next = curr.next

		this.size--;
		return value

	}

	search(value) {
		if (this.isEmpty()) {
			return -1
		}
		let i = 0;
		let curr = this.head
		while (curr) {
			if (curr.value === value) {
				return i
			}
			i++
			curr = curr.next
		}
		return -1

	}

	reverse() {
		let prev = null
		let curr = this.head
		while (curr) {
			let next = curr.next
			curr.next = prev
			prev = curr
			curr = next
		}
		this.head = prev
	}
}

const list = new LinkedList()

list.append(1)
list.append(2)

console.log('list', list)