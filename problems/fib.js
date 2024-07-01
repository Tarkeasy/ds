
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

	const optimizedFib = (n) => {
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
			memo[n] = optimizedFib(n - 1) + optimizedFib(n - 2);
		}

		return memo[n];
	}
	return optimizedFib(n)
}

console.log('fib(7)', fib(7))