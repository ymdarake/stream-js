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


const streamFilter = (pred, stream) => {
	if (stream === null)
		return null;

	if (pred(stream.streamCar()))
		return new Stream(stream.streamCar(), () => streamFilter(pred, stream.streamCdr()));

	return streamFilter(pred, stream.streamCdr());
}
const evens = new Stream(2, null);
evens.cdr = () => streamFilter(x => x % 2 === 0, integersStartingFrom(4));
console.log(evens.streamCar());
console.log(evens.streamCdr().streamCar());
console.log(evens.streamCdr().streamCdr().streamCar());
console.log(evens.streamCdr().streamCdr().streamCdr().streamCar());
