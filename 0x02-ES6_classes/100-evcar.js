import Car from './10-car.js'; // Assuming 10-car.js is in the same directory

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, "Electric", color); // Set model to "Electric" for all EVCars
    this._motor = motor;
    this._range = range;
  }

  get motor() {
    return this._motor;
  }

  get range() {
    return this._range;
  }

  // Override cloneCar to return a Car object, hiding EVCar-specific details
  cloneCar() {
    return new Car(this._brand, this._model, this._color);
  }
}
