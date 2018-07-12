/*Given a queue of integers of even length, 
rearrange the elements by interleaving the first half of the queue with the second half of the queue. 
We are allowed to use only queue data structure.

Examples:
Input :  1 2 3 4
Output : 1 3 2 4

Input : 11 12 13 14 15 16 17 18 19 20
Output : 11 16 12 17 13 18 14 19 15 20
*/

var interleave = (queue) =>{
	if(queue && typeof queue !== 'undefined' && Array.isArray(queue)){
		let len = queue.length;
		if(len %2 !== 0){
			return 'Please provide queue of integers of even length';
		}
		else{			
			var createq = (start, end) =>{
				let q = [];
				for(let i=start; i<end; i++){
					let val = queue[i];
					if(val && Number.isInteger(val) ){
						q.push(val);
					}
					else{
						return 'Queue should contain integers only';
					}
				}
				return q;
			}
			
			let q1 = createq(0, len/2), 
			q2 = createq(len/2, len);
			
			//return error state if any			
			if(q1 && typeof q1 === 'string'){
				return q1;
			}
			if(q2 && typeof q2 === 'string'){
				return q2;
			}
			
			//perform interleave operation
			let res = [];
			
			for(let i=0; i<len/2; i++){
				res.push(q1[i]);
				res.push(q2[i]);
			}
			return res;
		}
	}
	else{
		return 'Invalid input';
	}
}
//negavive tests
console.log(interleave(''));
console.log(interleave([1]));
console.log(interleave([]));
console.log(interleave([1,2,'',4]));

//positive tests
console.log(interleave([1,2,3,4]));
console.log(interleave([11,12,13,14,15,16,17,18,19,20]));