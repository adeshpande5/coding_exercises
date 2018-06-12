/*
    Given an input string, find the max repeated character along with number of times 
    it is repeated

    For Example:
    input aacddbbbcccd
    output c 4
*/
var findmaxrepeatchar = (inputstr) => {
    if (inputstr && inputstr.length > 1) {
        let len = inputstr.length,
            chararr = inputstr.split(''),
            chartotals = [],
            maxchar = null,
            maxcount = 0;

        for (let i = 0; i < len; i++) {
            let currchar = chararr[i];
            chartotals[currchar] = (chartotals[currchar]) ? chartotals[currchar] + 1 : 1;

            if (chartotals[currchar] > maxcount) {
                maxcount = chartotals[currchar];
                maxchar = currchar;
            }
        }

        return `Max repeated character :: ${maxchar} - ${maxcount}`;
    }
}

findmaxrepeatchar('aacddbbbcccd');