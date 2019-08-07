class Stream {

	constructor(car, cdr) {
		this.car = car;
		this.cdr = () => cdr;// delay
	}

	// set cdr (value)...

	streamCar () {
		return this.car;
	}

	streamCdr () {
		return this.cdr();// force without memoise
	}

}

module.exports = Stream;