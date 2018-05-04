//Find first non repeated character in string
	function findFirstNonRepeatedChar(input_string) {
 
    var str = document.getElementById(input_string).value;
    if (str.length == 0) {
        alert('Empty String');
        return;
    }
    var hash = [];
    var atleast_one_found = false;
    var string_chars = Array.prototype.slice.apply(str);
 
    for (var i in string_chars) {
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
                alert('First non repeated char found => ' + j);
                return;
            }
        }
    }
    alert('No non-repeated char found');
	}