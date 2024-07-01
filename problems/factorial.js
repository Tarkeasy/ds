// O(n)
const factorialRec = (n) => {

	if (n <= 1) {
		return 1
	}	
				//5 * 24 = 120
				//4 * 6 = 24
				//3 * 2 = 6
				//2 * 1 = 2
	return n * factorialRec(n - 1)

}

console.log(factorialRec(5))


//O(n)
const factorial = (n) => {

	if (n <= 1) {
		return 1;
	}

	let result = n

	for (let i = n; i > 1; i--) {
		result *= i - 1;
	}
	return result;
}

console.log(factorial(5))