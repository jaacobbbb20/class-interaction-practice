class Engine {
    constructor(type, horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }

    describe() {
        return `Engine: ${this.type}, Horsepower: ${this.horsepower}`;
    }
}

module.exports = Engine;