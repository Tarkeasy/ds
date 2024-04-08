// O(n)
const mergeStringAlternately = (word1, word2) => {
	let result = ''
	const biggestWord = Math.max(word1.length, word2.length)
	for (let i = 0; i < biggestWord; i++) {
		if (i < word1.length) {
			result += word1[i]
		}
		if (i < word2.length) {
			result += word2[i]
		}
	}
	return result
}

console.log(mergeStringAlternately("taras", "BOHDANNN"))