// O(n^2) if two arrays are equal
// O(mn) if arrays can have not equal size
const foo = (arr1, arr2) => {
	const result = []
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			result.push([arr1[i], arr2[j]])
		}
	}
	return result
}
const arr1 = [3, 4]
const arr2 = [5, 6, 7]
console.log(foo(arr1, arr2))