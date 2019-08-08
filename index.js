const Stream = require('./stream');

const integersStartingFrom = n => {
	return new Stream(n, () => integersStartingFrom(n + 1));
};

const integers = integersStartingFrom(1);
console.log(integers.car());
console.log(integers.cdr().car());
console.log(integers.cdr().cdr().car());
console.log(integers.cdr().cdr().cdr().car());
console.log(integers.filter(x => x % 2 === 0).car());
console.log(integers.filter(x => x % 2 === 0).cdr().car());
console.log(integers.filter(x => x % 2 === 0).cdr().cdr().car());
console.log(integers.map(x => x * 10).car());
console.log(integers.map(x => x * 10).cdr().car());
console.log(integers.map(x => x * 10).cdr().cdr().car());
