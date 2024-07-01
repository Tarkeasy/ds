
// O (n^2)
// function bubbleSort(arr) {
// 	let isSort;
// 	// do-while loop always executes at least first time
// 	do {
// 		isSort = false
// 		for (let i = 0; i < arr.length - 1; i++) {
// 			if (arr[i] > arr[i + 1]) {
// 				const temp = arr[i];
// 				arr[i] = arr[i + 1]
// 				arr[i + 1] = temp
// 				isSort = true
// 			}
// 		}
// 	} while (isSort)
// 	return arr;
// }

// console.log(bubbleSort([-1, -6, 3, 1, 9, 20, 2]))

// O(n ^ 2)
// function insertionSort(arr) {

// 	for (let i = 1; i < arr.length; i++) {
// 		let numberToInsert = arr[i] // -6
// 		let j = i - 1 // 0
// 			// -1 > -6
// 		while (j >= 0 && arr[j] > numberToInsert) {
// 			// arr[0 + 1] =  - 1
// 			arr[j + 1] = arr[j]
// 			// j-- , j becomes - 1
// 			j = j - 1
// 		}
// 		// arr [ -1 + 1 ] = arr[0] = -6
// 		arr[j + 1] = numberToInsert
// 	}

// 	return arr
// }

// console.log(insertionSort([-1, -6, 3, 1, 9, 20, 2]))

// Worst O(n^2) if every iteration pivot is the smallest number of the array or the greatest number of the array
// Average O(n logn) every iteration pivot in the middle or not the greatest or the smallest number
// function quickSort(arr) {
// 	if (arr.length <= 1) {
// 		return arr
// 	}
// 	let left = []
// 	let pivot = arr[arr.length - 1]
// 	let right = []
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		if (arr[i] < pivot) {
// 			left.push(arr[i])
// 		} else {
// 			right.push(arr[i])
// 		}
// 	}
// 	return [...quickSort(left), pivot, ...quickSort(right)]
// }

// console.log(quickSort([-1, -6, 3, 1, 9, 20, 2]))

// O(n logn), but space complexity is worse then quickSort because it creates copy of the n array
// So if we have space limitation, better use quickSort, otherwise mergeSort is faster in worst case scenario
function mergeSort(arr) {
	if (arr.length < 2) {
		return arr
	}
	let mid = Math.floor(arr.length / 2)
	const leftItems = arr.slice(0, mid)
	const rightItems = arr.slice(mid)

	function merge(left, right) {
		let resultArray = [], leftIndex = 0, rightIndex = 0;

		// Concatenating the values into the resultArray in order
		while (leftIndex < left.length && rightIndex < right.length) {
			if (left[leftIndex] < right[rightIndex]) {
				resultArray.push(left[leftIndex]);
				leftIndex++; // move left array cursor
			} else {
				resultArray.push(right[rightIndex]);
				rightIndex++; // move right array cursor
			}
		}

		// Concatenate here because there will be one element remaining
		// from either left OR the right
		return resultArray
			.concat(left.slice(leftIndex))
			.concat(right.slice(rightIndex));
	}

	return merge(mergeSort(leftItems), mergeSort(rightItems))
}

console.log(mergeSort([-1, -6, 3, 1, 9, 20, 2]))