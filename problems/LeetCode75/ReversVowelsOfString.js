/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
	const vowels = {
		'a': 'a',
		'e': 'e',
		'i': 'i',
		'o': 'o',
		'u': 'u'
	}

	let left = 0;
	let right = s.length - 1

	const reverse = s.split('').reverse().filter(el => el.toLocaleLowerCase() === vowels[el.toLocaleLowerCase()])

	let result = ''
	while (left <= right) {
		if (vowels[s[left].toLowerCase()]) {
			result += reverse.shift()
		} else {
			result += s[left]
		}
		left++
	};
	return result

}

console.log(reverseVowels('aA'));