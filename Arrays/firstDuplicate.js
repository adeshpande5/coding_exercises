/*Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number 
for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, 
	return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. 
If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be
firstDuplicate(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does,
 so the answer is 3.

For a = [2, 4, 3, 5, 1], the output should be
firstDuplicate(a) = -1.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ a.length.

[output] integer

The element in a that occurs in the array more than once and has the minimal index for its second occurrence. 
If there are no such elements, return -1.*/

function firstDuplicate(a) {//final answer
  for (let i of a) {
    let posi = Math.abs(i) - 1;
    if (a[posi] < 0) return posi + 1;
    a[posi] = a[posi] * -1;
  }

  return -1;
}



function firstDuplicate1(a) {
	let duplicates = [];

	for(let i=0; i< a.length; i++){
		const duplicate = a.indexOf(a[i], i+1);
		if(duplicate > -1){
			duplicates.push(duplicate);
		}
	}

	return duplicates.length > 0 ? a[duplicates.sort()[0]] : -1;
}


console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));


function firstDuplicate2(a){
  const seen = {}
  for (let v of a){
    if (seen[v]) return v
    seen[v] = v
  }
  
  return -1
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));


function firstDuplicate(a) {
  for (let i of a) {debugger
    let posi = Math.abs(i) - 1
    if (a[posi] < 0) return posi + 1
    a[posi] = a[posi] * -1
  }

  return -1
}
console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
