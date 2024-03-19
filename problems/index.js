

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// const isPalindrome = (x) => {
// 	const string = `${x}`
// 	let left = 0;
// 	let right = string.length - 1;

// 	while(left < right){
// 		if(string[left] !== string[right]) return false
// 		left++;
// 		right--;
// 	}
// 	return true;
// };

// console.log(isPalindrome(11))

// var romanToInt = function (s) {
// 	const sym = {
// 		'I': 1,
// 		'V': 5,
// 		'X': 10,
// 		'L': 50,
// 		'C': 100,
// 		'D': 500,
// 		'M': 1000
// 	}

// 	let result = 0;

// 	for (let i = 0; i < s.length; i++) {
// 		const curr = sym[s[i]]
// 		const next = sym[s[i + 1]]

// 		if (curr < next) {
// 			result += next - curr;
// 			i++;
// 		}
// 		else {
// 			result += curr;
// 		}
// 	};
// 	return result;
// }
// romanToInt('IX')

