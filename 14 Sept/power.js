function power(x, n) {
	if (n < 1) {
		return 1;
	} else {
		return x * power(x, n - 1);
	}
}
console.log(power(5, 4));