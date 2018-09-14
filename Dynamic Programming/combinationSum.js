/*Given an array of integers a and an integer sum, find all of the unique combinations in a that add up to sum.
The same number from a can be used an unlimited number of times in a combination.
Elements in a combination (a1 a2 … ak) must be sorted in non-descending order, while the combinations themselves must be sorted in ascending order.
If there are no possible combinations that add up to sum, the output should be the string "Empty".

Example

For a = [2, 3, 5, 9] and sum = 9, the output should be
combinationSum(a, sum) = "(2 2 2 3)(2 2 5)(3 3 3)(9)".

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

An array of positive integers.

Guaranteed constraints:
1 ≤ a.length ≤ 12,
1 ≤ a[i] ≤ 9.

[input] integer sum

Guaranteed constraints:
1 ≤ sum ≤ 30.

[output] string

All possible combinations that add up to a given sum, or "Empty" if there are no possible combinations.*/

function combinationSum(a, sum) {

}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function combinationSum(a, sum, start = 0, hash = 0, memo = new Set()) {
    if(start === 0) a.sort();
    
    if(sum === 0) {
        const result = [];
        
        if(!memo.has(hash)) result.push([]);
        
        memo.add(hash);
        return result;
    }
    
    const results = [];
    
    for(let i = start; i < a.length; i++) {
        const num = a[i];
        
        if(num <= sum) {
            const nextHash = (10 * hash + num) % (1e9 + 7);
            const output = combinationSum(a, sum - num, i, nextHash, memo);
            results.push(...output.map(arr => [num, ...arr]));
        }
    }
    
    if(hash) return results;
    return results.length ? results.map(arr => `(${arr.join(` `)})`).join`` : "Empty";
}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function findCombinationSums(a, i, sum, solution, prefix, solutions) {
    while (i < a.length) {
        if (a[i] > sum) {
            return
        }
        const newSolution = solution + prefix + a[i]
        if (a[i] === sum) {
            solutions[newSolution + ')'] = true
        } else {
            findCombinationSums(a, i, sum - a[i], newSolution, ' ', solutions)
        }
        i++
    }
}

function combinationSum(a, sum) {
    const solutions = {}
    a.sort((a, b) => { return a - b })
    findCombinationSums(a, 0, sum, '', '(', solutions)
    const solutionStrings = Object.keys(solutions)
    if (solutionStrings.length === 0) {
        return 'Empty'
    }
    return solutionStrings.join('')
}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function util(a, s, i, w) {
    if(s<0) {
        return false;
    } else if(s===0) {
        if(ans.indexOf(w) === -1)
            ans += w + ')';
        return true;
    }
    let res = false;
    for(let j=i; j<a.length; j++) {
        if(w==='(') {
            w = w+a[i];
        } else {
            w = w + ' ' +a[i];
        }
        res = util(a,s-a[i],j,w) || res;
        w = w.substring(0, w.length -1);
        if(w[w.length -1 ]=== ' ') {
            w = w.substring(0, w.length -1);
        }
    }
    return res;
}
let ans = '';
function combinationSum(a, sum) {
    a.sort();
    for(let i=0; i<a.length; i++) {
        util(a,sum,i,'(');
    }
    if(ans === '') {
        ans = 'Empty';
    }
    return ans;
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function _combinationSum(a, sum, i, current){
    if (sum == 0)
        return [current];
    let test, testOutput, output = [];
    for ( ; i < a.length && a[i] <= sum; i++){
        test = current.slice();
        test.push(a[i]);
        testOutput = _combinationSum(a, sum-a[i], i, test);
        if (testOutput.length > 0)
            output.push(...testOutput);
    }
    return output;
}

function combinationSum(a, sum) {
    a = [...new Set(a)];
    a.sort((e1, e2) => e1 - e2);
    let i, output = [], 
        test, testOutput;
    for (i = 0; i < a.length && a[i] <= sum; i++){
        test = [a[i]];
        testOutput = _combinationSum(a, sum-a[i], i, test);
        if (testOutput.length > 0)
            output.push(...testOutput);
    }
    return output.length == 0 ? "Empty" : output.map(row => "(" + row.join(" ") + ")").join("");
}
