let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

let person = {
    firstName,
    lastName,
    email,
    sayHello () {
        console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
    },
    // Getter and Setter on ES6
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        return this.firstName = value;
    }
};

// Getter and Setter on common JS

//Object.defineProperty(person, 'fullName', {
//   get: function () {
//       return this.firstName + ' ' + this.lastName;
//   },
//   set: function (value) {
//       return this.firstName = value;
//   }
//});

console.log(person.sayHello());
console.log(person.fullName);
person.fullName = 'Peter'
console.log(person);
console.log(person.sayHello());

//function createCar(property, value) {
//    //let car = {};
//    //
//    //car[property] = value;
//    //return car;
//
//    return {
//        [property]: value,
//        ['_' + property]: value,
//        [property.toUpperCase()]: value,
//        ['get' + property]() {
//            return this.[property];
//        }
//    };
//
//}
//
//console.log(createCar('vin', 1));