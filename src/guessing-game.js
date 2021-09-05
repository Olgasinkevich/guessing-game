class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.result = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = Math.round((this.min + this.max) / 2)
        return this.result;
    }

    lower() {
        this.setRange(this.min, this.result);
    }

    greater() {
        this.setRange(this.result, this.max);
    }
}

module.exports = GuessingGame;
