function power(x, d) {
	if (d < 1) {
		return 1;
	} else {
		return x * power(x, d - 1);
	}
}

function checkFermat(a, b, c, n) {
	if ((n > 2) && (power(a, n) + power(b, n) === power(c, n))) {
		console.log('Holy smokes, Fermat was wrong!');
	} else {
		console.log('No, that doesn’t work.');
	}
}

checkFermat(2, 4, 6, 6);
