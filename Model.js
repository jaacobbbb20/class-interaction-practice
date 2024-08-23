class Model {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    describe() {
        return `Car Model: ${this.name}, Type: ${this.type}`;
    }
}

module.exports = Model;