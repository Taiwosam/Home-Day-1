function Car (name, model, type) {
  this.name = name;
  this.model = model;
  this.type = type;

  this.drive = function() {
  	if (this.name === 'MAN') {
  		this.speed = '77 km/h';
  	}

  	else if (this.name === 'Porshe') {
  		this.speed = '250 km/h';
  	}

  	returnedCar = new Car(this.name, this.model, this.type);
  	returnedCar.speed = this.speed;
    return returnedCar;
  };

  if (this.name === 'MAN') {
  	this.speed = '0 km/h';
  }

  if (this.name === undefined) {
  	this.name = 'General';
  }

  if (this.model === undefined) {
  	this.model = 'GM';
  }

  if (this.name !== 'Porshe' && this.name !== 'Koenigsegg') {
    this.numOfDoors = 4;
  }

  else {
    this.numOfDoors = 2;
  }

  if (this.type === 'trailer') {
    this.numOfWheels = 8;
    this.isSaloon = false;
  }

  else {
    this.numOfWheels = 4;
    this.isSaloon = true;
  }

}

module.exports = Car;
