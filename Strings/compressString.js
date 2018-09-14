/*For example:
	aabcccccaaa should return a2b1c5a3
	however if compressed string would not be smaller than original string then it should return original string
	you can assume that string would contain [A-Za-z]
*/
function compressString(inputstr){
	if(typeof inputstr !== 'string'){
		return 'Invalid input';
	}
	let newString = '',
	last = inputstr[0],
	count=1;
	for(let i=1; i<=inputstr.length; i++){
		if(inputstr[i] == last){
			count++;
		}	
		else{
			newString += `${last}${count}`;
			last = inputstr[i];
			count = 1;
		}	
	}
	return (newString.length <= inputstr.length) ? newString : inputstr;
}

console.log(compressString('aabcccccaaa'));
