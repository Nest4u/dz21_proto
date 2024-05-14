function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.getInfo = function() {
    return `Транспортний засіб: ${this.make} ${this.model} ${this.year}`;
}

function Car(make, model, year, numDoors) {
  
    Vehicle.call(this, make, model, year); 
    this.numDoors = numDoors;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Bicycle(make, model, year, gearNumber) {
    Vehicle.call(this, make, model, year); 
    this.gearNumber = gearNumber;
}
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;
let myCar = new Car('Toyota', 'Corolla', 2022, 4);
let myBicycle = new Bicycle('Giant', 'Defy', 2021, 21);

console.log(myCar.getInfo()); 
console.log(myBicycle.getInfo());