class Make {
    constructor(name) {
        this.name = name;
    }

    describe() {
        return `Manufacturer: ${this.name}`;
    }
}

module.exports = Make;