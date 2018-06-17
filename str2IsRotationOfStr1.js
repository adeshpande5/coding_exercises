/*  Is string 2 a rotated version of string 1
    For example:
        ‘erac’ is a rotation of ‘race’ and has been rotated once. 
        ‘cera’ is a rotation of ‘race’ and has been rotated twice. 
        ‘rcae’ is not a rotation of ‘race’.

    Solution Approach:
        subString(string1+string1,string2) = true. 
        This is to say that if we concatenate string1 with itself, 
        this new larger string must contain string2 in order for string 2 
        to be a rotation of string1.    
*/

var isRotation = (string1, string2) => {
 if (string1 && string2 && string1.length !== string2.length){ return false;}
 let s1s1 = string1+string1;
 
 if (s1s1.includes(string2)){
    return true;
 } 
   return false;
}

console.log(isRotation('erac', 'race'));//true
console.log(isRotation('cera', 'race'));//true
console.log(isRotation('rcae', 'race'));//false
console.log(isRotation('rdses', 'tf'));//false
console.log(isRotation('undefined', 'undefined'));//true
console.log(isRotation('undefined', undefined));//true