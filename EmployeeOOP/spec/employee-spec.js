var oop = require('../app/employee-oop.js');

var Employee = oop.Employee;
var Manager = oop.Manager;
var Ceo = oop.Ceo;
var Artisan = oop.Artisan;

var dodo = new Artisan('Dodo', 32, 1500);
var ajanlekoko = new Ceo('Agbabiaka', 100000);
var paul = new Manager('Paul', 30000);

describe("Tests for the Employee Class and its children", function() {

  describe("All instances should be of type object and be instances of their constructor", function() {
    it("typeof(instance) should equal 'object'", function() {
      expect( typeof(dodo) ).toEqual('object');
      expect( typeof(ajanlekoko) ).toEqual('object');
      expect( typeof(paul) ).toEqual('object');
    });

    it("should return true for instance instanceof constructor", function() {
      expect(dodo instanceof Artisan).toBeTruthy();
      expect(ajanlekoko instanceof Ceo).toBeTruthy();
      expect(paul instanceof Manager).toBeTruthy();
    });
  });

  describe("The prroperties of the instances should be as expected", function () {
    it("should return the correct properties for each instance", function() {
      expect(dodo.tax).toBe(225);
      expect(dodo.name).toBe("Dodo");
      expect(dodo.age).toBe(32);
      expect(dodo.baseSalary).toBe(1500);

      expect(ajanlekoko.tax).toBe(40000);
      expect(ajanlekoko.name).toBe("Agbabiaka");
      expect(ajanlekoko.baseSalary).toBe(100000);

      expect(paul.tax).toBe(9000);
      expect(paul.name).toBe("Paul");
      expect(paul.baseSalary).toBe(30000);
    });

    it("should return undefined for non-existent property", function() {
      expect(ajanlekoko.age).toBeUndefined();
      expect(paul.age).toBeUndefined();
    });

    it("private variables in constructors should not be accessible outside them", function() {
      expect(ajanlekoko.motto).toBeUndefined();
      expect(function() { motto; }).toThrow();

      expect(paul.personalMantra).toBeUndefined();
      expect(function() {personalMantra; }).toThrow();

      expect(dodo.saying).toBeUndefined();
      expect(function() { saying; }).toThrow();
    });
  });

  describe("Each of the instances should implement speak and calculateSalary differently", function() {
    it("calculateSalary and speak should behave differently based on the object", function() {
      expect(dodo.speak()).toBe("Gotta work harder and save some money.")
      expect(dodo.calculateSalary()).toBe(1275);

      expect(paul.speak()).toBe("Made some money. Gotta go on vacation");
      expect(paul.calculateSalary()).toBe(33000);

      expect(ajanlekoko.speak()).toBe("The money keeps moving in");
      expect(ajanlekoko.calculateSalary()).toBe(120000);
    });
  });

});
