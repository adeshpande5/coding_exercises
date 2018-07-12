/*
Problem Statement:
Given an array of integers, return subset of array (one or more) such that they add up to a specific target.


Example:
	Given nums = [33, 23, 28, 35, 60, 17, 52, 16], target = 77,

	returns [60, 17] and [33, 28, 16].
*/
var sumEqualToTarget = (inputArr, targetSum) => {
    if (!(inputArr instanceof Array)) {
        return 'false. please provide valid input array';
    }
    if (typeof targetSum !== 'number') {
        return 'false. please provide valid target number';
    }
    let subsets = [];
    let helper = (arr, target, sumSoFar, i, subsets, curr) => {
        if (i == arr.length) {
            if (sumSoFar == target) {
                subsets.push(curr);
            }
            return;
        }
        helper(arr, target, sumSoFar, i + 1, subsets, curr);
        helper(arr, target, sumSoFar + arr[i], i + 1, subsets, curr + arr[i]);
    }
    helper(inputArr, targetSum, 0, 0, subsets, "");
    if (subsets.length === 0) {
        return false;
    }
    return `true ${subsets}`;
}

console.log('Target =77 ' + sumEqualToTarget(undefined, 77));

console.log('Target =77 ' + sumEqualToTarget([33, 23, 28, 35, 60, 17, 52, 16], ''));

console.log('Target =77 ' + sumEqualToTarget([33, 23, 28, 35, 60, 17, 52, 16], 77));

console.log('Target =17 ' + sumEqualToTarget([65, 45, 35, 25, 15, 10], 17));

console.log('Target =77 ' + sumEqualToTarget([33, 23, 28, 35, 30, 30, 17, 52, 16], 77));