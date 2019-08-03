/* What is Currying?
    Currying is a fundamental tool in functional programming, a programming pattern 
    that tries to minimize the number of changes to a program’s state (known as side effects) 
    by using immutable data and pure (no side effects) functions.
    Currying refers to the process of transforming a function with multiple arity 
    into the same function with less arity.
 */
//implement mult(2)(3)
function mult2(a){
    return b => {
        return a * b;
    }
}

console.log(mult2(2)(3));

//implement mult(2)(3)(5)
function mult3(a){
    return b => {
        return c => {
            return a * b * c;
        }
    }
}

console.log(mult3(2)(3)(5));

//Generalized version for any number of args
function curry(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    };
}

//Example usages
const multiply= (a, b, c) => {
    return a * b * c;
}

const multiplyByTwo = curry(multiply, 2);

console.log(multiplyByTwo(2, 5));