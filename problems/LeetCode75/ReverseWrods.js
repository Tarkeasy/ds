/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

	if (s.length <= 1) {
		return s
	}
	const sArr = s.split(" ")

	let result = ''
	for (let i = sArr.length; i >= 0; i--) {
		if (sArr[i]) {
			result += sArr[i] + ' ';
		}
	}
	return result.substring(0, result.length)

};

console.log(reverseWords('  hello     world  '))