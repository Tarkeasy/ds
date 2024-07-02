// O(n)
const factorialRec = (n) => {

	if (n < 2) {
		return n
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

	let result = n

	for (let i = 2; i < n; i++) {
		result *= i;
	}
	return result;
}

console.log(factorial(5))