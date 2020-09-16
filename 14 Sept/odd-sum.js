function oddSum(n) {
	if (n < 1) {
		return 0;
	} else {
		return n + oddSum(n - 2);
	}
}
console.log(oddSum(13));