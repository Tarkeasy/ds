
// Time complexity O(n)
// const fibo = (n) => {

// 	const fibNumbers = [0, 1];

// 	for (let i = 2; i < n; i++) {
// 		fibNumbers[i] = (fibNumbers[i - 1] + fibNumbers[i - 2])
// 	}

// 	return fibNumbers

// }

// console.log('fibo', fibo(7))


// 4
const fib = (n) => {

	if(n < 2) return n;
	//         4
	//        / \
	//   		3    2
	//  	 / \	/	\
	// 		2	 1	1  0
	// 	 /\
	// 	 1 0
		return fib(n - 1) + fib(n - 2);
}
console.log(fib(4))