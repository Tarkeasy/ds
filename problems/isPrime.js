//O(n)
const isPrime = (n) => {
	if (n < 2) {
		return true;
	}

	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false
		}
	}
	return true
}


//O(n^2)
// const isPrime = (n) => {
// 	if(n < 2){

// 		return true;
// 	}

// 	let left = 2;
// 	let right = n - 1;

// 	while(left <= right){
// 		if(left * right === n){

// 			return false
// 		}
// 		right--;
// 		if(right < left){
// 			right = n - 1
// 			left++;
// 		}
// 	}

// 	return true
// }

console.log(isPrime(4))
