const Stream = require('./stream');

const integersStartingFrom = n => {
	const s = new Stream(n, null);
	s.cdr = () => integersStartingFrom(n + 1);
	return s;
};

// const integers = integersStartingFrom(1);
// console.log(integers.streamCar());
// console.log(integers.streamCdr().streamCar());
// console.log(integers.streamCdr().streamCdr().streamCar());
// console.log(integers.streamCdr().streamCdr().streamCdr().streamCar());


const integers = new Stream(1, null);
integers.cdr = () => integersStartingFrom(2);
console.log(integers.streamCar());
console.log(integers.streamCdr().streamCar());
console.log(integers.streamCdr().streamCdr().streamCar());
console.log(integers.filter(x => x % 2 === 0).streamCar());
console.log(integers.filter(x => x % 2 === 0).streamCdr().streamCar());
console.log(integers.filter(x => x % 2 === 0).streamCdr().streamCdr().streamCar());
