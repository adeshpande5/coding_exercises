BONUS CHALLENGE
This challenge is a simplified version of the climbingStaircase problem from the interview practice section.
 @zero_cool will be solving this one first during the facebook livestream to help scaffold a discussion 
 about recursion, memoization, dynamic programming, and backtracking.

You need to climb a staircase that has n steps, and you decide to get some extra exercise by jumping up the steps. 
You can cover at most k steps in a single jump. Return the number of possible sequences of jumps that you could take to climb the staircase.

Example

For n = 4 and k = 2, the output should be climbingStaircasePrequel(n, k) = 5.

There are 5 different sequences of steps you could take:

[[1, 1, 1, 1],
 [1, 1, 2],
 [1, 2, 1],
 [2, 1, 1],
 [2, 2]]
Input / Output

[execution time limit] 4 seconds (js)

[input] integer n

An integer representing the number of steps you must ascend.

Guaranteed constraints:
0 ≤ n ≤ 30

[input] integer k

An integer representing the maximum number of steps you can take in one jump.

Guaranteed constraints:
0 ≤ k ≤ n

[output] integer

The number of different ways you could climb the steps.

=======================================================================================================

//recursion without memoization
function climbingStaircasePrequel(n, k) {
    if(n===0) return 1;
    let sum=0;
    for(let jump =1; jump <Math.min(n,k); jump++){
        sum += climbingStaircasePrequel(n-jump, k);
    }
    return sum;
}

//recursion with memoization
function climbingStaircasePrequel(n, k, memo={}) {
    if(n===0) return 1;
	if(n in memo) return memo;
	
    let sum=0;
    for(let jump =1; jump <Math.min(n,k); jump++){
        sum += climbingStaircasePrequel(n-jump, k, memo);
    }
	memo[n] = sum;
    return sum;
}

//dynamic programming
function climbingStaircasePrequel(n, k) {
    const dp = [1];
	for(let i=1; i<=n; i++){
		let next=0;
		for(let jump =1; jump <Math.min(i,k); jump++){
			next += dp[i-jump];
		}
		dp.push(next);
	}
	
	return dp.pop();	
}

=======================================================================================================
This will actually return array of all sequences you could climb the steps

backtracking solution (we are limiting solutions based on Math.min(n,k))

//recrusion without memoization
function climbingStaircase(n, k) {
    if(n===0) return [[]];
    let total = [];
    for(let jump =1; jump < Math.min(n,k); jump++){
        total.push(...climbingStaircase(n-jump, k).map(arr => [jump, ...arr]));
    }
	
    return total;
}

//recrusion with memoization
function climbingStaircase(n, k, memo={}) {
    if(n===0) return [[]];
	if(n in memo) return memo[n];
	
    let total = [];
    for(let jump =1; jump <Math.min(n,k); jump++){
        total.push(...climbingStaircase(n-jump, k, memo).map(arr => [jump, ...arr]));
    }
	memo[n]= total;
    return total;
}

//dynamic programming
function climbingStaircase(n, k) {
    const dp=[[[]]];
    
    for(let i =1; i <=n; i++){
		let next = [];
        for(let jump =1; jump <= Math.min(i,k); jump++){
			next.push(...dp[i-jump].map(arr => [jump,...arr]));
		}
		dp.push(next);
    }
    return dp.pop();
}

console.log(climbingStaircase(4, 2));