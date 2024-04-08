/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {

	let firstStr = str1
	let secondStr = str2

	while (firstStr !== secondStr) {
		if (firstStr.length > secondStr.length) {
			firstStr = firstStr.slice(0, Math.round(firstStr.length / 2))
		} else {
			secondStr = secondStr.slice(0, Math.round(secondStr.length / 2))
		}
		if (firstStr.length === 1 && secondStr.length === 1 && firstStr !== secondStr) {
			return ''
		}
	}

	return firstStr.length < secondStr.length ? firstStr : secondStr

};

console.log(gcdOfStrings('LEET', 'CODE'))