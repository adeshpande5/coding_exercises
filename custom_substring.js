//substring in O(n)
//This function returns part of string from start to end, not including end itself
//if start > end then order is swapped
//default values are 0 and string length for start and end 
//if any of them is < 0, defaulting it to 0 
customsubstring = (inputstr, start, end) =>{
	let outputstr = '';
	if(inputstr !=='' && typeof inputstr !== 'undefined'){
		if(!isNaN(start)){
			const len = inputstr.length;
			if(isNaN(end)){
				end = len;
			}
			//start <0 or end <0
			if (start < 0) start = 0;
			if (end < 0) end = 0;

			if(start > end){
				let tmp = end;
				end = start;
				start = tmp;	
			}
			
			const inputstrarr = inputstr.split('');
			
			for(let i=start; i < end; i++){
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
	console.log('empty '+customsubstring());
	//negative, no start/end
	console.log('no start/end '+customsubstring('blabla'));
	//negative start
	console.log('-2 '+customsubstring('blabla', -2));
	//start > -end
	console.log('2 -4 '+customsubstring('blabla', 2, -4));
	// start > end
	console.log('2 0 '+customsubstring('blabla', 2, 0));
	// valid
	console.log('0 3 '+customsubstring('blabla', 0, 3));
})();