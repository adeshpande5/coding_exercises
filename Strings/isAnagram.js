/*
	Given two strings check if they are Anagram, return true/false
	Anagram strings are such that if you re-arrange words in one string 
	then you'll receive the exact same string as other string   
	
	Example:
		race, acre
		abb, bab
*/
var isAnagram = (str1, str2) =>{
	if(str1 && str2 && str1.length !== str2.length){
		return false;
	}
	let s1arr = str1.split('').map(item => item.trim()),
	s2arr = str2.split('').map(item => item.trim());
	
	var countchars = (chararr) =>{
		let chars = [];
		for(let char of chararr){
			chars[char] = chars[char] ? chars[char] + 1 : 1;				
		}
		return chars;
	}
	let s1chars = countchars(s1arr),
	s2chars = countchars(s2arr);
		
	for(let [key, value] of Object.entries(s1chars)){		
		if(s1chars[key] !== s2chars[key]){
			return false;
		}
	}
	return true;
}

console.log(isAnagram('abcb', 'bbca'));
console.log(isAnagram('abb', 'bab'));
console.log(isAnagram('abb', 'babc'));
console.log(isAnagram('adbb', 'cdab'));
console.log(isAnagram('', ''));
console.log(isAnagram('undefined', undefined));
console.log(isAnagram('undefined', 'undefined'));
console.log(isAnagram(null, null));