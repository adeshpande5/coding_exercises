/*write substr in O(n)
substr returns part of string from given start for the given number of characters
If start is positive and greater than, or equal, to the length of the string, substr() returns an empty string.

If start is negative, substr() uses it as a character index from the end of the string. 

If start is negative or larger than the length of the string, start is set to 0*/

customsubstr = (inputstr, start, length) =>{
	let outputstr = '';
	if(inputstr !=='' && typeof inputstr !== 'undefined'){
		if(!isNaN(start)){debugger;
			const len = inputstr.length;
			if(start > 0 && start >= len)
				return outputstr;

			if(start < 0 && !isNaN(length) && length < 0)
				return outputstr;

			if (start > len) 
				start = 0;
			
			if(start < 0 && isNaN(length))
				length = len;

			if(start < 0) 
				start = len + start;
					
			const inputstrarr = inputstr.split('');
			
			let i= start;
			for(i; i < length; i++){
				outputstr += inputstrarr[i];
			}
		}
		else{
			return inputstr;
		}
	}
	else{
		return inputstr;
	}
	return outputstr;
}

//test it out
(() =>{
	//negative, no str, no start/end
	console.log('empty '+customsubstr());
	//negative, no start/end
	console.log('no start/end '+customsubstr('Hello world!'));
	//negative start
	console.log('-2 '+customsubstr('Hello world!', -2));
	//start > -end
	console.log('2 -4 '+customsubstr('Hello world!', 2, -4));
	// start > end
	console.log('2 0 '+customsubstr('Hello world!', 2, -3));
	// valid
	console.log('0 3 '+customsubstr('Hello world!', 0, 3));
})()