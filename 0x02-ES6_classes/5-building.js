/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Cannot construct Building instances directly');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Square Feet must be a number');
    }
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

// Example of a subclass that extends Building and implements the evacuationWarningMessage method
class OfficeBuilding extends Building {
  evacuationWarningMessage() {
    return 'Please evacuate the office building immediately!';
  }
}

// Usage example
const office = new OfficeBuilding(5000);
console.log(office.sqft); // 5000
console.log(office.evacuationWarningMessage()); // 'Please evacuate the office building immediately!'
