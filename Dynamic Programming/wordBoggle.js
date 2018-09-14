/*Boggle is a popular word game in which players attempt to find words in sequences of adjacent letters on a rectangular board.

Given a two-dimensional array board that represents the character cells of the Boggle board and an array of unique strings words, find all the possible words from words that can be formed on the board.

Note that in Boggle when you're finding a word, you can move from a cell to any of its 8 neighbors, but you can't use the same cell twice in one word.

Example

For

board = [
    ['R', 'L', 'D'],
    ['U', 'O', 'E'],
    ['C', 'S', 'O']
]
and words = ["CODE", "SOLO", "RULES", "COOL"], the output should be
wordBoggle(board, words) = ["CODE", "RULES"].

Example

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.char board

A two-dimensional array of uppercase English characters representing a rectangular Boggle board.

Guaranteed constraints:
2 ≤ board.length ≤ 4,
2 ≤ board[i].length ≤ 4,
'A' ≤ board[i][j] ≤ 'Z'.

[input] array.string words

An array of unique English words composed only of uppercase English characters.

Guaranteed constraints:
0 ≤ words.length ≤ 100,
2 ≤ words[i].length ≤ 16,
'A' ≤ words[i][j] ≤ 'Z'.

[output] array.string

Words from words that can be found on the Boggle board without duplicates and sorted lexicographically in ascending order.*/

function wordBoggle(board, words) {
	//build a trie for all the words, for faster lookups
	const trie = {};

	for(const word of words){
		let node = trie;

		for(const letter of word){
			if(!(letter in node )) node[letter] = {};
			node = node[letter];
		}

		node["$"] = word;
	}	
	
	// go through the board and find all possible starting points
	// is the first letter on trie?	
	const wordsFound = new Set();
	const [n, m] = [board, board[0]].map(arr => arr.length);

	for(let i=0; i< n; i++){
		for(let j=0; j<m; j++){
			const letter = board[i][j];
			if(letter in trie) search(i,j,trie[letter]);
		}
	}

	//recursive DFS, backtrack if letters stop matching
	function search(x, y, node, visited = new Set()){
		const hash = 5 * x + y; //create a unique hash, to store/retrieve value in a quicker way
		visited.add(hash);

		if("$" in node) wordsFound.add(node["$"]);

		for(let dx = -1; dx <=1; dx++){
			for(let dy = -1; dy <=1; dy++){
				if((dx || dy) && x + dx in board && y+dy in board[0]){
					const nextHash = 5 * (x+dx) + y + dy;
					const letter = board[x + dx] [y+dy];

					//important line
					if(letter in node && !visited.has(nextHash)){
						search(x + dx, y+dy, node[letter], visited);	
					}
				}
			}
		}

		visited.delete(hash);
	}

	return [...wordsFound].sort();
}

let board = [
    ['R', 'L', 'D'],
    ['U', 'O', 'E'],
    ['C', 'S', 'O']
],
words = ["CODE", "SOLO", "RULES", "COOL"];

console.log(wordBoggle(board, words));