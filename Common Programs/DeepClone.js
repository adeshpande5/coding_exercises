/*
    Write a function called deepClone which takes an object and creates an object copy of it.
*/

var employee = {
	name : 'Anand',
	salary : 12345,
	address : {
		addressLine1 : 'Right There',
		addressLine2 : 'Right Now',
		phoneNumber: {
		  workPhone: 7098889765,
		  homePhone: 1234567898
		}
	}
};

function deepClone(object) {
    var newObject = {};
    for(var key in object){
        if(typeof object[key] === 'object' && object[key] !== null) {
            newObject[key] = deepClone(object[key]);
        } else {
            newObject[key] = object[key];
        }
    }
    return newObject;
}

console.log(deepClone(employee));

//ES6, arrow function
const deepClone1 = object => {
    let newObject = {};
    for(let key in object){
        if(typeof object[key] === 'object' && object[key] !== null) {
            newObject[key] = deepClone(object[key]);
        } else {
            newObject[key] = object[key];
        }
    }
    return newObject;
};

console.log(deepClone1(employee));

//shallow copy
const copied = Object.assign({}, employee);
//OR ES6 spread operator
const copied1 = { ...employee };
//With Shallow copy, new object points to reference of original object, 
//so if properties/methods get modified on original object, copied object references same

//DO NOT use following methods to clone at any cost
//1. Using Object.create
/*
This is wrong, it’s not performing any copy.
Instead, the original object is being used as the prototype of copied.
Apparently it works, but under the hoods it’s not:
*/
    const original = {
        name: 'Fiesta'
    }
    const copied2 = Object.create(original);
    copied2.name //Fiesta

    original.hasOwnProperty('name') //true
    copied2.hasOwnProperty('name') //false

//2. JSON serialization
/*
this one has unexpected consequences.
By doing this you will lose any Javascript property that has no equivalent type in JSON, 
like Function or Infinity. 
Any property that’s assigned to undefined will be ignored by JSON.stringify, causing them to be 
missed on the cloned object.
Also, some objects are converted to strings, like Date objects for example (also, not taking 
into account the timezone and defaulting to UTC), Set, Map and many others.
This only works if you do not have any inner objects and functions, but just values.
*/ 
    const deepClone2 = object => {
        return JSON.parse(JSON.stringify(object));
    };

    console.log(deepClone2(employee));