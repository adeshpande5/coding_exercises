/*Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what 
you would be asked to do during a real interview.

Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string that contains only lowercase English letters.

Guaranteed constraints:
1 ≤ s.length ≤ 105.

[output] char

The first non-repeating character in s, or '_' if there are no characters that do not repeat.*/

function firstNotRepeatingCharacter(s) {	
    const string_chars = Array.prototype.slice.apply(s);
    if(string_chars.length === 1) return string_chars[0];

 	let hash = [];
    let atleast_one_found = false;

    for (const i in string_chars) {
        if (typeof (hash[string_chars[i]]) != "undefined") {
            hash[string_chars[i]]++;
            atleast_one_found = true;
        } else {
            hash[string_chars[i]] = 0;
        }
    }
    if (atleast_one_found) {
        for (var j in hash) {
            if (hash[j] == 0) {                
                return j;
            }
        }
    }

    return '_';
}

console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));