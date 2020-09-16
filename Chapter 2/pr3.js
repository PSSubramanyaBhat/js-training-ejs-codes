let k = '';
for (var i = 0; i < 8; i++) {
	for (var j = 0; j < 4; j++) {
		if (i % 2 == 0) {
			k += " #";
		}
		else {
			k += "# ";
		}
	}
	console.log(k);
	k = '';
}


