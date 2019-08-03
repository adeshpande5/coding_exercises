var employee = {
    name: "Anand",
    designation: "Developer",
    address: {
      street: "Bay",
      city: "SF"
    }
};
  
Object.freeze(employee);
  
employee.name = "Dummy"; // fails silently in non-strict mode
employee.address.city = "SJ"; // attributes of child object can be modified
  
console.log(employee.address.city); // Output: "SJ"

function deepFreeze (o) {
    Object.freeze(o);
  
    Object.getOwnPropertyNames(o).forEach(function (prop) {
      if (o.hasOwnProperty(prop)
      && o[prop] !== null
      && (typeof o[prop] === "object" || typeof o[prop] === "function")
      && !Object.isFrozen(o[prop])) {
        deepFreeze(o[prop]);
      }
    });
    
    return o;
};

deepFreeze(employee);

employee.name='James';//fail silently/throw error (non-strict vs strict)
employee.address.street='Hay';

console.log(employee.name);
console.log(employee.address.street);