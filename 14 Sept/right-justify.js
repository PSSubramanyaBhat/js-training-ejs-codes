let leadingSpaces = '';
let rightJustify = function (s) {
	let len = s.length;
	for (let i = 1; i <= 70 - len; i++) {
		leadingSpaces += " "
	}
	console.log(leadingSpaces + s);
};

rightJustify('monty');