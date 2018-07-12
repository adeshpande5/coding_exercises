/*Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
    if(typeof s !== 'string'){
		throw new Error('Please enter valid input string');
		return;
	}
	let n = s.length, ans = 0;
	let index = []; // current index of character
	// try to extend the range [i, j]
	for (let j = 0, i = 0; j < n; j++) {
		let existingIndex = index[s[j]] || 0;		
		i = Math.max(existingIndex, i);
		ans = Math.max(ans, j - i + 1);		
		index[s[j]] = j + 1;
	}    
	return ans;
};

console.log(lengthOfLongestSubstring('a'));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));