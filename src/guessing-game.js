var mid;
class GuessingGame {
    constructor() {}

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	mid = Math.round(this.min + (this.max - this.min)/2);
    	return mid;
    }

    lower() {
    	this.max = mid;
    }

    greater() {
    	this.min = mid;
    }
}

module.exports = GuessingGame;
