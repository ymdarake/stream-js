class Stream {

	constructor(car, cdr) {
		this.car = car;
		this.cdr = cdr;// delayed
	}

	streamCar () {
		return this.car;
	}

	streamCdr () {
		return this.cdr();// force without memoise
	}

	filter (pred) {
		const iter = (stream) => {
			if (stream === null)
				return null;
	
			if (pred(stream.streamCar()))
				return new Stream(stream.streamCar(), () => iter(stream.streamCdr()));

			return iter(stream.streamCdr());
		}
		return iter(this);
	}

}

module.exports = Stream;