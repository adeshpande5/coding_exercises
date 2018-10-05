/*
	Given a sorted array and a target value, 
		return last index of target 
		if array does not contain target return -1;
			
	For example:
		array = [1,1,3,6,6,8,11,13]
		target = 6 	 
*/
function getLastIndexOf(arr, target){
  if(!Array.isArray(arr) || typeof target !== 'number') {
    return 'Please enter valid input';
  }
  let low = 0;
  let high = arr.length;

  while(low < high){
    const mid = Math.floor((low + high) /2);
    if(arr[mid] === target && arr[mid+1] !== target){      
      return mid;
    } else if( arr[mid+1] === target || arr[mid] < target){
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return -1;
}

console.log(getLastIndexOf('array', 3));

console.log(getLastIndexOf([], '3'));

console.log(getLastIndexOf([], 3));

console.log(getLastIndexOf([1,1,3,3,6,6,8,11,13], 3));

console.log(getLastIndexOf([1,1,3,3,6,6,8,11,13], 6));

/*
Time Complexity: O(log N)
Space complexity: O(1)
This is an optimized and elegant solution compared to below one
*/


function getLastIndexOf(arr, target){
  const len = arr.length;
  let idx = -1;
  for(let i=0; i< len; i++) {
    if(arr[i] === target){
       idx = i;
    }
  }
  return idx;
}

/*
Time Complexity: O(N)
Space complexity: O(1)
*/