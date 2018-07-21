/*
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix. 

Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
*/
var transposeMatrix = (input) => {
    if (!Array.isArray(input)) {
        console.error('Please enter valid array matrix to transpose');
        return;
    }
    let result = [];
    const R = input.length;
    const C = input[0].length;

    for (let r = 0; r < R; ++r) {
        if (input[r].length !== C) {
            console.error('All array must be of equal length to transpose them.');
            return;
        }
    }

    for (let c = 0; c < C; ++c) {
        let cEle = [];
        for (let r = 0; r < R; ++r) {
            cEle.push(input[r][c]);
        }
        result.push(cEle);
    }

    return result;
}

console.log(transposeMatrix([[4, 3], [9, 8], [1, 4], [2, 5]]));

console.log(transposeMatrix([[2, 7], [5, 8], [8, 8]]));

console.log(transposeMatrix([[5], [8]]));

console.log(transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

console.log(transposeMatrix([[1, 2, 3], [4, 5, 6]]));