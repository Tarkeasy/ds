
// Time complexity O(n)
const fibo = (n) => {

	const fibNumbers = [0, 1];

	for (let i = 2; i < n; i++) {
		fibNumbers[i] = (fibNumbers[i - 1] + fibNumbers[i - 2])
	}

	return fibNumbers

}

console.log('fibo', fibo(7))

// Complexity is O(n) with memo, without memo would be O(2^n)
const memo = {}
const fib = (n) => {

	if (n < 2) {
		return n;
	}
	//         5
	//        / \
	//   		3    2
	//  	 / \	/	\
	// 		2	 1	1  0
	// 	 /\
	// 	 1 0

	if (!(n in memo)) {
		memo[n] = fib(n - 1) + fib(n - 2);
	}
	return memo[n];

}
console.log(fib(7))