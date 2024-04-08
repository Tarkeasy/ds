/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
	const result = []
	const maxNumberOfCandies = Math.max(...candies)
	for (let i = 0; i < candies.length; i++) {
		if (candies[i] + extraCandies >= maxNumberOfCandies) {
			result[i] = true
		} else {
			result[i] = false
		}
	}
	return result
};

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1))