// O(n) - too slow
function removingStars(s) {
	const stack = []

	for (let item of s) {
		if (item === '*') {
			stack.pop()

		} else {
			stack.push(item)
		}
	}
	return stack.join('')
}

console.log(removingStars("leet**cod*e"))