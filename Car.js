const Make = require(`./Make`);
const Model = require(`./Model`);
const Engine = require(`./Engine`);
const Year = require(`./Year`);

class Car {
    constructor(make, model, engine, year) {
        this.make = make; 
        this.model = model; 
        this.engine = engine;
        this.year = year;
    }

    describe() {
        return `
            ${this.year.describe()}
            ${this.make.describe()}
            ${this.model.describe()}
            ${this.engine.describe()}
        `;
    }
}

module.exports = Car;
