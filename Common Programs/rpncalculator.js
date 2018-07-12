/**
 * Implement a reverse polish notation calculator, taking a list of strings (either operators or operands) and returning the result of the calculation.
 * Reverse Polish Notation is a mathematical format in which the operator always follows its operands. 
 * For example, 4 + 2 might be written 4 2 +, and (8/2) * 3 might be written as 8 2 / 3 *, and would return the same result as 3 8 2 / *
 */
var rpn = (input) => {
	if(input && typeof input !== 'undefined' && typeof input === 'string'){
		//list of inputs
		let inputs = input.split(',').map(item => item.trim());
		const operators = ['+', '-', '/', '*', '%', '^'];
		let result = null;
		let output = [];
		 
		//perform operation in rpn way
		for(let val of Object.values(inputs)){		
			if(operators.includes(val)){
				//operation on previous 2 eles
				if(result === null){
					let secondoperand = output.pop();
					let firstoperand = output.pop();
					result = `${firstoperand} ${val} ${secondoperand}`;
				}
				else{
					result = `${result} ${val} ${output.pop()}`;
				}            
			} else{
				output.push(val);
			}        
		}
	
		return eval(result);
	}
	else{
		return 'Invalid input';
	}
}

//negative tests
console.log(rpn(undefined));
console.log(rpn('undefined'));
console.log(rpn(''));
console.log(rpn([]));
console.log(rpn(null));
console.log(rpn('null'));
console.log(rpn('3,*,8,2,/,*'));
console.log(rpn('3,6,4,8,2,/,*, +,-'));

//positive tests
console.log(rpn('4,2,+'));
console.log(rpn('8,2,/,3,*'));
console.log(rpn('3,8,2,/,*'));
console.log(rpn('3,3,3,3,3,+,+,+,+'));
console.log(rpn('3,6,4,8,2,/,*,+,-'));
