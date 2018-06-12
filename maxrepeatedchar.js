/*
    Given an input string, find the max repeated character along with number of times 
    it is repeated

    For Example:
    input aacddbbbcccd
    output c 4
*/
var findmaxrepeatchar = (inputstr) => {
    if (inputstr && inputstr.length > 1) {
        let chararr = inputstr.split(''),
            chartotals = [],
            maxchar = null,
            maxcount = 0;

        for (let char of chararr) {
            chartotals[char] = (chartotals[char]) ? chartotals[char] + 1 : 1;

            if (chartotals[char] > maxcount) {
                maxcount = chartotals[char];
                maxchar = char;
            }
        }

        return `Max repeated character :: ${maxchar} - ${maxcount}`;
    }
}

findmaxrepeatchar('aacddbbbcccd');