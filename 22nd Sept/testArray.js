"use strict";
//MATH
// console.log(Math.abs(-1));
// console.log(Math.floor(1.5));
// console.log(Math.ceil(1.5));
// console.log(Math.cbrt(-27));
// console.log(Math.clz32(826));
// console.log(Math.exp(2));
// console.log(Math.fround(2.6));
// console.log(Math.round(2.6));
// console.log(Math.hypot(3,4,5));
// console.log(Math.imul(-3,4));
// console.log(Math.max(3,4,5));
// console.log(Math.min(4,3,5));
// console.log(Math.pow(3,4));
// console.log(Math.random());
// console.log(Math.sign(2));
// console.log(Math.sign(-2));
// console.log(Math.sign(0));
// console.log(Math.sqrt(16));
// console.log(Math.trunc(9.656));


// let fruits = ["Apple", "Banana"];

// fruits.forEach(function(item, index) {
//     console.log(item, index);
// });


// let newLength = fruits.push("Orange");

// console.log(fruits);

// let last = fruits.pop();
// console.log(last);

// let removedItem = fruits.splice(1, 2);
// console.log(fruits);
// console.log(removedItem);

// fruits.push("Apple");
// fruits.push("Mango");
// fruits.push("Lemon");

// let shallowCopy = fruits.slice(1,3);
// console.log(fruits);
// console.log(shallowCopy);


// let board = [ 
// 	['R','N','B','Q','K','B','N','R'],
// 	['P','P','P','P','P','P','P','P'],
// 	[' ',' ',' ',' ',' ',' ',' ',' '],
// 	[' ',' ',' ',' ',' ',' ',' ',' '],
// 	[' ',' ',' ',' ',' ',' ',' ',' '],
// 	[' ',' ',' ',' ',' ',' ',' ',' '],
// 	['p','p','p','p','p','p','p','p'],
// 	['r','n','b','q','k','b','n','r'] 
// ];
// console.log(board);
//   console.log(board);
//   console.log("yo");
//   console.log(board.join('\n'));
//   console.log('day');
//   console.log(board);

//   // Move King's Pawn forward 2
//   board[4][4] = board[6][4];
//   console.log(board);
//   board[6][4] = ' ';
//   console.log(board);
//   console.log(board.join('\n'));
//   console.log(board);

// let outputStrings = [];
// for (let i = 0, n = inputValues.length; i < n; ++i) {
//   outputStrings.push(String(inputValues[i]));
// }

// let a, b, rest;
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);


// function parseProtocol(url) { 
// 	const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
// 	if (!parsedURL) {
// 	  return false;
// 	}
// 	console.log(parsedURL); 
// 	// ["https://developer.mozilla.org/en-US/Web/JavaScript", 
// 		// "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

// 	const [, protocol, fullhost, fullpath] = parsedURL;
// 	return protocol;
//   }

//   console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript'));

// const {a: aa = 10, b: bb = 5} = {a: 3};

// // console.log(a);
// console.log(aa); // 3
// console.log(bb); // 5



// const user = {
// 	id: '42',
// 	displayName: 'jdoe',
// 	fullName: {
// 	  firstName: 'John',
// 	  lastName: 'Doe'
// 	}
//   };

//   function userId({id}) {
// 	return id;
//   }

//   function whois({displayName, fullName: {firstName: name}}) {
// 	return `${displayName} is ${name}`;
//   }

//   console.log(userId(user)); // 42
//   console.log(whois(user));  // "jdoe is John"

// let metadata = {
// 	title: 'Scratchpad',
// 	translations: [
// 	  {
// 		locale: 'de',
// 		localization_tags: [],
// 		last_edit: '2014-04-14T08:43:37',
// 		url: '/de/docs/Tools/Scratchpad',
// 		title: 'JavaScript-Umgebung'
// 	  }
// 	],
// 	url: '/en-US/docs/Tools/Scratchpad'
//   };

//   let {
// 	title: englishTitle, // rename
// 	translations: [
// 	  {
// 		 title: localeTitle, // rename
// 	  },
// 	],
//   } = metadata;

//   console.log(englishTitle); // "Scratchpad"
//   console.log(localeTitle);


// let key = 'z';
// let {[key]: foo} = {z: 'bar'};

// console.log(key); // "bar"





