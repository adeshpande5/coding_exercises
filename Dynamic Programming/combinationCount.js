/*Given three equal-length arrays, array1, array2, and array3, your task is to find the number of 
combinations of indices i, j, and k, such that array1[i] < array2[j] < array3[k].

Example

For array1 = [12, 6, 8, 3], array2 = [1, 3, 5, 8], and array3 = [9, 15, 7, 5], 
the output should be combinationCount(array1, array2, array3) = 7.

The possible combinations are:
{3, 5, 7}
{3, 5, 9}
{3, 5, 15}
{3, 8, 9}
{3, 8, 15}
{6, 8, 9}
{6, 8, 15}

For array1 = [25 25], array2 = [30 30], and array3 = [35 37], the output should be combinationCount(array1,array2,array3) = 8.

The possible combinations are:
{25, 30, 35}
{25, 30, 37}
{25, 30, 35}
{25, 30, 37}
{25, 30, 35}
{25, 30, 37}
{25, 30, 35}
{25, 30, 37}

[execution time limit] 4 seconds (js)

[input] array.integer array1

The first array of numbers.

Guaranteed constraints:
1 ≤ array1.length ≤ 104
0 ≤ array1[i] ≤ 2 · 104

[input] array.integer array2

The second array of numbers.

Guaranteed constraints:
array2.length = array1.length
0 ≤ array2[i] ≤ 2 · 104

[input] array.integer array3

The third array of numbers.

Guaranteed constraints:
array3.length = array1.length
0 ≤ array3[i] ≤ 2 · 104

[output] integer

Number of combinations of i, j, and k values such that array1[i] < array2[j] < array3[k].
*/

//simple approach
function combinationCount(array1, array2, array3){
	let count = 0;
	for(let i=0; i<array1.length; i++){
		for(let j=0; j<array2.length; j++){
			if(array1[i] < array2[j]){
				for(let k=0; k<array3.length; k++){
					if(array2[j] < array3[k]){
						count++;
					}
				}
			}
		}
	}
	return count;
}

//approach 2
function combinationCount(array1, array2, array3){
	let count = 0;
	//sort the arrays
	array1.sort((a,b) => a - b);
	array2.sort((a,b) => a - b);
	array3.sort((a,b) => a - b);
	
	//skip array index if less than previous array selected index
	let lastJIndex = 0, lastKIndex=0;
	for(let i=0; i<array1.length; i++){
		lastJIndex = array2.indexOf(array1[i],lastJIndex);
		if(lastJIndex > -1){
			for(let j=lastJIndex; j<array2.length; j++){
				lastKIndex = array3.indexOf(array2[j], lastKIndex) + 1;
				if(lastKIndex > -1){
					count++;
				}
			}
		}
	}
	return count;
}

const array1 = [25,25], array2 = [30,30], array3 = [35,37];
console.log(combinationCount(array1,array2,array3));

const array4 = [12, 6, 8, 3], array5 = [1, 3, 5, 8], array6 = [9, 15, 7, 5];
console.log(combinationCount(array4,array5,array6));