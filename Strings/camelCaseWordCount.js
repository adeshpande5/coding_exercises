/**
* Given a CamelCase string, return the number of words in that string.
*
* For example:
*
*  - "ThisIsAString" => 4
*  - "TheUSA" => 2
*
* It should handle acronyms and initialisms reasonably.
*
* Constraints:
*
*  - The string will always begin with an uppercase letter.
*  - The string will only consist of ASCII alpha characters (a-zA-Z).
*  - The string will not contain consecutive one-letter words:
*      If given the string "TheXY", "the x y" is not a valid interpretation of that string.
*
* ThisIsAString
*     ^
*
* The "I" comes after a lowercase letter. It must begin a new word.
*
* ThisIsAString
*        ^
*
* The "S" comes before a lowercase letter. It must begin a new word.
*
* Count the number of uppercase letters that are adjacent to lowercase letters.
* 
* Explanation for the regex used
* (?<!^) - “Zero-width negative lookbehind assertion”, think of it as “if you see what’s in here, don’t match the next thing”
* (?<=)  - “Match prefix but exclude it”
*/
function camelCaseWordCount(s) {
  if(typeof s !== 'string') return 'Please enter valid string';
  if(s === '') return 0;

  /*const matches = s.match(/(?<!^)([A-Z][a-z]|(?<=[a-z])[A-Z])/g);
  
  return matches.length + 1;  
  */

  const mod = s.replace(/(?<!^)([A-Z][a-z]|(?<=[a-z])[A-Z])/g, ' $1').split(' ');
  
  return mod.length;
}

console.log(camelCaseWordCount("TheUSA"));
console.log(camelCaseWordCount("ThisIsAString"));
console.log(camelCaseWordCount("USAThe"));
console.log(camelCaseWordCount("TheXY"));