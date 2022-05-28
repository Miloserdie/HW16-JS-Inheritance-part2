class Clock{
	constructor(e) {
		this.element = e;
		this.fullFormat = true;
		this.interval = setInterval(() => this.render(), 1000);
		this.element.addEventListener('click', () => this.changeFormat());
	}
	render() {
		if (this.fullFormat) {
			this.element.innerHTML = new Date().toLocaleTimeString();
		} else {
			this.element.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
		}
	}
	changeFormat() {
		this.fullFormat = !this.fullFormat;
	}
}

const clock = new Clock(document.querySelector('.first-clock'));


class SecondClock extends Clock{
	constructor(e) {
		super(e)
	}
	render() {
		if (!this.fullFormat) {
			this.element.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
		} else {
			this.element.innerHTML = new Date().toLocaleTimeString();
		}
	}
}

const secondClock = new SecondClock(document.querySelector('.second-clock'));


class ShortClock extends Clock{
	constructor(e) {
		super(e)
	}
	render() {
		if (this.fullFormat) {
			this.element.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
		} else {
			this.element.innerHTML = new Date().toLocaleTimeString();
		}
	}
}

const shortClock = new ShortClock(document.querySelector('.short-clock'));