// This function takes a childClass and makes it inherit from a parentClass' prototype:
function inheritPrototype(childClass, parentClass) {
  var parentCopy = Object.create(parentClass.prototype);
  parentCopy.constructor = childClass;
  childClass.prototype = parentCopy;
}

function Employee(name, baseSalary, tax) {
  this.name = name;
  this.baseSalary = baseSalary;
  this.tax = tax;
}

Employee.prototype.calculateSalary = function() {
  return this.baseSalary - this.tax;
};

function Ceo (name, baseSalary) {
  Employee.call(this, name, baseSalary);
	this.tax = baseSalary * 0.4;
  var motto = "The money keeps moving in";

  this.speak = function() {
    return (motto);
  };
}

inheritPrototype(Ceo, Employee);

Ceo.prototype.calculateSalary = function() {
  var bonus = this.baseSalary * 0.6;
  return (this.baseSalary + bonus) - this.tax;
};

function Manager(name, baseSalary) {
  Employee.call(this, name, baseSalary);
	this.tax = this.baseSalary * 0.3;
  var personalMantra = "Made some money. Gotta go on vacation";

  this.speak = function() {
    return (personalMantra);
  };
}

inheritPrototype(Manager, Employee);

Manager.prototype.calculateSalary = function() {
  var bonus = this.baseSalary * 0.4;
  return (this.baseSalary + bonus) - this.tax;
};

function Artisan(name, age, baseSalary) {
  Employee.call(this, name, baseSalary);
  this.tax = baseSalary * 0.15;
  this.age = age;
  var saying = "Gotta work harder and save some money.";

  this.speak = function() {
    return (saying);
  };
}

inheritPrototype(Artisan, Employee);

module.exports = { Employee: Employee, Manager: Manager, Ceo: Ceo, Artisan: Artisan};
