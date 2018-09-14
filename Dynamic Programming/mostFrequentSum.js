/*The sum of a subtree is the sum of all the node values in that subtree, including its root.

Given a binary tree of integers, find the most frequent sum (or sums) of its subtrees.

Example

For
t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": null
    },
    "right": {
        "value": 3,
        "left": null,
        "right": null
    }
}
the output should be
mostFrequentSum(t) = [2, 3, 6].
1st example

Since all the sum values in this tree occur only once, return all of them in ascending order.

For
t = {
    "value": -2,
    "left": {
        "value": -3,
        "left": null,
        "right": null
    },
    "right": {
        "value": 2,
        "left": null,
        "right": null
    }
}
the output should be
mostFrequentSum(t) = [-3].
2nd example

There are 3 subtree sums for this tree: -2 + (-3) + 2 = -3, -3, and -2. The most frequent sum is -3 since it appears twice.

Input/Output

[execution time limit] 4 seconds (js)

[input] tree.integer t

A tree of integers.

Guaranteed constraints:
0 ≤ tree size ≤ 105,
-20000 ≤ node value ≤ 20000.

[output] array.integer

The most frequent subtree sum. If there are several such sums, return them sorted in ascending order.*/

//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function traverse(node, sums = {}){
    if(!node) return {sum: 0, sums:{}};

    let sum = node.value;

    if(node.left) sum += traverse(node.left, sums).sum;
    if(node.right) sum += traverse(node.right, sums).sum;

    sums[sum] = (sums[sum] || 0 ) + 1;

    return {sum, sums};
}
function mostFrequentSum(t) {
    const sums = traverse(t).sums;

    const mostFrequent = new Set();
    let maxFreq = 0;

    for(const sum in sums){
        const freq = sums[sum];

        if(freq > maxFreq) {
            mostFrequent.clear();
            maxFreq = freq;
        }

        if(freq === maxFreq){
            mostFrequent.add(parseInt(sum));
        }
    }

    return [...mostFrequent].sort((a,b) => a - b);
}

//BFS, works but takes lot of memory 
function mostFrequentSum1(t) {
    if(!t) return [];

    const queue = [[t, [t]]];
    const sums = new Map();    

    while(queue.length){
        const [node, parents] = queue.shift();

        for(const parent of parents){
            sums.set(parent, ((sums.has(parent) ? sums.get(parent) : 0 ) + node.value);
        }

        if(node.left) queue.push(node.left, [...parents, node.left]);
        if(node.right) queue.push(node.right, [...parents, node.right]);
    }

    const freqs = {};

    for(const [subtree, sum] of sums){
        if(!(sum in freqs)) freqs[sum] = 0;
        freqs[sum]++;
    }

    const maxFreq = Math.max(...Object.values(freqs));
    const mostFrequents = [];

    for(const sum in freqs){
        if(freqs[sum] === maxFreq) mostFrequents.push(parseInt(sum));
    }
    return mostFrequents.sort((a,b) => a - b);
}