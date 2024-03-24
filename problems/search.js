// O(n)
// const linearSearch = (arr, target) => {

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === target) {
// 			return i
// 		}

// 	}
// 	return -1
// }

// console.log(linearSearch([2, 3, 5, 19,], 5))

// O(log n)
// const binarySearch = (arr, target) => {
// 	let left = 0;
// 	let right = arr.length - 1;

// 	while (left <= right) {
// 		const mid = Math.floor((left + right) / 2)
// 		if (arr[mid] === target) {
// 			return mid;
// 		}

// 		if (target < arr[mid]) {
// 			right = mid - 1
// 		} else {
// 			left = mid + 1
// 		}
// 	}
// 	return -1;
// }

// console.log('result', binarySearch([2, 3, 5,18,20], 2))

// O(logn)
const recursiveBinarySearch = (arr, target, l, r) => {
	let left = l;
	let right = r;
	const mid = Math.floor((left + right) / 2)

	if (arr[mid] === target) {
		return mid;
	} else if (target < arr[mid]) {
		right = mid - 1
	} else {
		left = mid + 1
	}
	if(left === right){
		return -1;
	}

	return recursiveBinarySearch(arr, target, left, right)
}
const arr = [2, 3, 5, 18, 20]
console.log('result', recursiveBinarySearch(arr, 18, 0, arr.length - 1))
