class Stream {

	constructor(car, cdr) {
		this._car = car;
		this._cdr = cdr;// delayed
	}

	car () {
		return this._car;
	}

	cdr () {
		return this._cdr();// force without memoise
	}

	filter (pred) {
		const iter = (stream) => {
			if (stream === null)
				return null;
	
			if (pred(stream.car()))
				return new Stream(stream.car(), () => iter(stream.cdr()));

			return iter(stream.cdr());
		}
		return iter(this);
	}

}

module.exports = Stream;