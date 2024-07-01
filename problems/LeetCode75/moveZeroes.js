/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let left = 0;
	let right = nums.length
	while (left < right) {
		if (nums[left] === 0) {
			const [item] = nums.splice(left, 1)
			nums.push(item)
			left--;
			right--;
		} else {
			left++
		}
	}
	return nums
};

console.log('moveZeroes', moveZeroes([0, 1]))