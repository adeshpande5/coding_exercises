/*
Problem Statement:
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
	Given nums = [2, 7, 11, 15], target = 9,

	Because nums[0] + nums[1] = 2 + 7 = 9,
	return [0, 1].
*/

var twoSum = function(nums, target) {
  var i=0, 
  len = nums.length,
  map = {};
  for(i; i< len; i++){
	var complement = target - nums[i];
	if(map.hasOwnProperty(complement)){
		return [map[complement], i];
	}
	map[nums[i]] = i;
  }  
};

console.log(twoSum([4, 8, 12, 25, 7, 11], 19));
/*
Complexity Analysis:

Time complexity : O(n). We traverse the list containing n elements only once. Each look up in the table costs only O(1) time.

Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores at most n elements.
*/