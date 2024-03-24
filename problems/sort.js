
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

// Worst O(n^2) if every iteration pivot is the smallest number of the array or the greatest number
// Average O(n logn) every iteration pivot in the middle or not the greatest ot the smallest number
function quickSort(arr) {
	if (arr.length <= 1) {
		return arr
	}
	let left = []
	let pivot = arr[arr.length - 1]
	let right = []
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([-1, -6, 3, 1, 9, 20, 2]))